#!/usr/bin/env node

const os = require('os');
const fs = require('fs').promises;
const path = require('path');
const { chromium } = require('playwright');

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

  page.on('console', message => console.log('PAGE LOG:', message.text()));

  const {
    GH_ACCESS_TOKEN, 
    REPO_URL
  } = process.env;
  const filePath = path.resolve(process.cwd(), 'local-webrtc-backend', 'page.html');
  const creds = JSON.stringify({GH_ACCESS_TOKEN, REPO_URL});
  const fileUrl = `file://${filePath}?ghCreds=${encodeURIComponent(creds)}`;
  await page.goto(fileUrl);

  process.on('SIGINT', async () => {
    console.log('Closing browser due to Ctrl+C');
    await browser.close();
    await cleanupTempUserDataDir(tempDir);
    process.exit(0);
  });

  await new Promise(resolve => 0); // Keep the script running
})();

async function cleanupTempUserDataDir(tempDir) {
  await fs.rm(tempDir, {
    recursive: true,
    force: true
  });
}
