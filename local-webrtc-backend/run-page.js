#!/usr/bin/env node

const os = require('os');
const fs = require('fs').promises;
const path = require('path');
const { chromium } = require('playwright');
const readline = require('readline');

// Set up readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'chat> '
});

(async () => {
  if ( ! process.env.GH_ACCESS_TOKEN || ! process.env.REPO_URL ) {
    console.error(`You need to set GH_ACCESS_TOKEN and REPO_URL environment variables so this script can poll for and write comments at your repo.`);
    return process.exit(1);
  }

  const tempDir = os.tmpdir();
  const browser = await chromium.launch({ 
    headless: true,
    args: [
      `--disable-web-security`, // disable CORS to make requests to GH API to poll
      `--enable-local-file-access`, // enable file access to blog files
      `--user-data-dir=${tempDir}`, // needed to switch on 'disable-web-security'
    ]
  });
  const page = await browser.newPage();

  page.on('console', message => {
    console.log('PAGE LOG:', message.text());
    rl.prompt();
  });

  const {
    GH_ACCESS_TOKEN, 
    REPO_URL
  } = process.env;
  const filePath = path.resolve(process.cwd(), 'local-webrtc-backend', 'page.html');
  const creds = JSON.stringify({GH_ACCESS_TOKEN, REPO_URL});
  const fileUrl = `file://${filePath}?ghCreds=${encodeURIComponent(creds)}`;
  await page.goto(fileUrl);

  rl.prompt();

  process.on('SIGINT', async () => {
    console.log('Closing browser due to Ctrl+C');
    rl.close();
    await browser.close();
    await cleanupTempUserDataDir(tempDir);
    process.exit(0);
  });

  // Listen to command line input
  rl.on('line', async (line) => {
    // Parse the input line to implement chat commands
    const [command, ...args] = line.split(' ');
    switch (command) {
      case 'reply':
        // Implement reply functionality
        const [ghHandle, ...messageParts] = args;
        const message = messageParts.join(' ');
        await page.evaluate((ghHandle, message) => {
          // Function to send message to the browser's chat logic
          // This assumes you have a function in your browser context to handle this
          sendMessage(ghHandle, message);
        }, ghHandle, message);
        break;
      case 'list':
        // Implement list functionality
        console.log('Listing connected clients...');
        // Similar to above, call a function in the browser's context
        await page.evaluate(() => listClients());
        break;
      default:
        console.log(`Unknown command: ${command}`);
    }
  });

  await new Promise(resolve => 0); // Keep the script running
})();

async function cleanupTempUserDataDir(tempDir) {
  await fs.rm(tempDir, {
    recursive: true,
    force: true
  });
}
