## Janus - Simple P2P Blog and Developer P2P Chat on GitHub

Janus represents a breakthrough in developer collaboration, blending WebRTC's peer-to-peer capabilities with GitHub's API. It's a tool that enables developers to host a P2P blog and chat directly from GitHub, transforming how we think about collaboration and real-time communication in the open-source world.

### What is Janus?

Janus is all about facilitating direct, real-time interactions between developers. By running a simple HTML page (`page.html`) as a WebRTC server, you can establish live chats with other developers who initiate contact through GitHub issues. This seamless integration with GitHub issues makes Janus a unique tool for developers looking for a decentralized, in-band method of collaboration.

### Features at a Glance:

- **P2P Blog**: Share your thoughts and updates directly from your machine to your audience's browser.
- **Developer Chat**: Engage in real-time chat with anyone who opens an issue in your Janus-enabled repository.
- **GitHub API Integration**: Uses GitHub issues as a novel way to initiate and manage P2P connections.

### Project Structure:

```
|-- README.md
|-- index.html
|-- local-webrtc-backend
|   |-- page.html
|   `-- run-page.js
```

### Getting Started with Janus:

#### Setup

1. Clone the Janus repository.
2. Locally set up environment variables `GH_ACCESS_TOKEN` and `REPO_URL`.

The access token should be a GitHub Personal Access Token scoped to the specific repo of your Janus fork and provided with repository read, and issues read & write access. You can create such tokens under the Developer Settings tab in your GitHub profile settings.

#### Running Janus

1. Start the `./local-webrtc-backend/run-page.js` script.
2. The script polls your repository for new issues, facilitating P2P connections for chat and blog content sharing. Every open issue is treated as a chat request when you are running the janus backend.

#### Interacting with Janus

- **Blog Content**: Write and serve your blog content through `./local-webrtc-backend/page.html`.
- **Chat Interface**: Access the chat through the command line interface provided by `run-page.js`.

### Chat Interface Commands

- **`list`**: list connected clients
- **`reply <username> <... your message...>`**: reply to a connected user
- **`@<username> <... your message...>`**: alias for reply
- **`quit`**: exit and shutdown janus back-end. *note: sometimes you need to combine with `Ctrl-C` too!*
- **`help`**: display commands

### Future Directions:

Janus is an evolving project with goals to expand its capabilities, including file sharing for code collaboration and broader repository support. We aim to streamline the developer experience on GitHub, making P2P interaction a natural part of the platform.

### Why Janus? An In-Band GitHub Solution:

We've observed the frequent need for real-time collaboration in open-source projects, often leading developers off-site to external platforms. Janus seeks to eliminate this diversion, offering an on-site, in-band solution that's simple, empowering, and decentralized.

Our vision extends beyond mere chatting. Imagine sending and receiving files, collaborating on code directly through this platform, or even integrating collaborative editors. The possibilities are limitless!

Though we're unaffiliated with GitHub, we dream of a day when GitHub embraces Janus, providing a dedicated API endpoint to streamline the user experience. Imagine P2P developer chat as a first-class citizen on GitHub - enhancing productivity, happiness, and the overall developer experience.

### Contributing to Janus

Your contributions can help shape the future of Janus. Whether it's code, ideas, or feedback, we welcome your input. 

Janus is more than just a tool; it's a step towards a more connected and interactive open-source community. Join us in this exciting journey to reshape developer collaboration on GitHub.

