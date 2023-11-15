<img src=.readme-assets/janus-logo.png alt="Janus Logo" width=500>

## Janus - Simple P2P Blog and Developer P2P Chat on GitHub

Janus combines WebRTC's peer-to-peer capabilities with GitHub's API to create a unique platform for developer collaboration. This tool allows developers to host a P2P blog and chat from their terminal and engage in chat sessions directly from GitHub, offering a new approach to collaboration and real-time communication.

It began as a crazy experiment to answer the question: *What about a P2P blog?*

As it developed, interest also grew in the question: *How much can the friction of a human-mediated signaling channel in WebRTC be reduced?*

Check it out. Many simple affordances have been provided to make establishing a P2P connection using issue comments as the signaling method as friction-free as possible.

### What is Janus?

Janus serves blog content, and chat, over a P2P connection. You can add blog content to the blog section in `./local-webrtc-backend/page.html`

Janus is all about facilitating direct, real-time interactions between developers. By running a simple HTML page (`page.html`) as a WebRTC server that handles a blog and chat, you can establish live chats with other developers who initiate contact through GitHub issues. 

If you run a Janus back-end chat messages reach you in the terminal and that's where you respond to them. For connecting clients, they chat through a static web interface on GitHub pages.

This seamless integration with GitHub issues makes Janus a unique tool for developers looking for a decentralized, in-band method of collaboration.

### Features at a Glance:

- **P2P Blog**: Share your thoughts and updates directly from your machine to your audience's browser.
- **Developer Chat**: Engage in real-time chat with anyone who opens (or re-opens) an issue in your Janus-enabled repository when you're running the backend.
- **GitHub API Integration**: Uses GitHub issues as a novel way to initiate and manage P2P connections.

### Getting Started with Janus:

#### Setup

1. Clone the Janus repository, and switch on GitHub pages. 
2. Locally set up environment variables `GH_ACCESS_TOKEN` and `REPO_URL`.
3. **[optional]** Add an **Office Hours: ** line to the top of your README (or to a pinned issue) indicating when you'll be online to chat (erm, unless it's always :laughing:)

Please note, the access token should be a GitHub Personal Access Token scoped to the specific repo of your Janus fork and provided with repository read, and issues read & write access. You can create such tokens under the Developer Settings tab in your GitHub profile settings.

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
- **`quit`**: exit and shutdown janus back-end. *Please note: sometimes you might need to combine `quit` with `Ctrl-C`*
- **`help`**: display commands
- **`kick <username>`**: disconnect a user
- **`ban <username>`**: ban a user for this session

*Note: for perma-bans we suggest using GitHub's block capability. That will prevent users from opening issues in your repository.*

### Hot Tips & Info: Maximizing Janus

To help you make the most of Janus, here's a quick executive summary of key points:

1. **Running Janus**: As a project maintainer, simply run the backend following the instructions provided here. It's been tested on MacOS and Debian. It's basically just single file node app, check out the code to learn mode. For other developers seeking to chat with the maintainer, open (or re-open) an issue when the maintainer is available for chat. A chat post link will be generated in the issue, which, when clicked, opens the chat in your browser, connecting you with the maintainer.

2. **Practical Applications of Janus**:
   - **Project Office Hours**: Schedule regular times for open discussion, creating a personal and private environment for project-related conversations.
   - **Project Support Chat**: Offer an alternative to traditional issue tracking for private, ephemeral conversations regarding project support.
   - **Remote Pairing and GitHub Socializing**: Leverage Janus for remote collaboration or to connect with inspiring GitHub community members in a more personal and instantaneous manner.
   - **Secure, Non-cloud Hosted Communication**: Ideal for sensitive information exchange, like API keys or banking details, providing a secure channel beyond the reach of traditional cloud services.
   - **Anonymous Chat**: For those requiring a level of anonymity, Janus offers a platform where users can chat without revealing personal or organizational identities, while still tied to their GitHub accounts.

3. **Authentication and Security**: Janus is designed with security at its core. The connection is initiated exclusively by the account that opens the issue, preventing impersonation. Additionally, GitHub's blocking features are integrated, allowing repository owners to prevent unwanted chat requests.

4. **Troubleshooting**: Becuase of the nature of WebRTC in some cases (some networks, devices, OSes) it may not be possible to establish a P2P connection. In those cases Janus will not work!

### Exciting New Features on the Horizon for Janus!

As we continue to innovate with Janus, our focus remains on enhancing the GitHub collaboration experience. We're thrilled to share a sneak peek into some of the potential features that might find their way into future versions of Janus:

1. **Namespaced Chat**: We're exploring the possibility of introducing namespaced chat. This feature would allow users to seamlessly transition into a dedicated chat namespace with another user, simplifying one-on-one communication. Just imagine, no more repetitive tagging in each message. Jump in and out of chat rooms with ease – a perfect blend of convenience and functionality.

2. **Multi-User Rooms**: While Janus primarily facilitates one-on-one interactions, akin to phone calls, we recognize the value of group discussions. Hence, we're considering the addition of multi-user rooms for those occasional 'conference calls' within the GitHub ecosystem.

We're happy to review contributions in these areas for possible inclusion! Of course, you're free to modify your own version to suit your needs.

### What is P2P ?

P2P means point-to-point, and it indicates a direct connection between parties, that avoids going through any intermediate servers like a regular centralized chat service. In Janus, P2P is enabled by WebRTC data channels. While there are some edge cases that go through servers that help to route the traffic, in most cases P2P via WebRTC is a direct message channel between the two parties. It's also worth remembering that WebRTC is encrypted and secure.

### Why Janus? An In-Band GitHub Solution:

We've observed the frequent need for real-time collaboration in open-source projects, often leading developers off-site to external platforms. Janus seeks to eliminate this diversion, offering an on-site, in-band solution that's simple, empowering, and decentralized.

Our vision extends beyond mere chatting. Imagine sending and receiving files, collaborating on code directly through this platform, or even integrating collaborative editors. The possibilities are limitless!

Though we're unaffiliated with GitHub, we dream of a day when GitHub embraces Janus, providing a dedicated API endpoint to streamline the user experience. Imagine P2P developer chat as a first-class citizen on GitHub - enhancing productivity, happiness, and the overall developer experience.

### Dreaming Bigger

Our vision for Janus extends into realms yet unexplored. From file transfers, direct code collaboration, to integrating collaborative editors – the potential is limitless. Unaffiliated with GitHub, we nonetheless aspire to a future where Janus and GitHub are more closely intertwined, with dedicated API support to enhance this unique developer experience.

Stay tuned for more updates as we continue to shape the future of GitHub collaboration with Janus! 🚀💻🌐

### Future Directions:

Janus is an evolving project with goals to expand its capabilities, including file sharing for code collaboration and broader repository support. We aim to streamline the developer experience on GitHub, making P2P interaction a natural part of the platform.

### Contributing to Janus

Your contributions can help shape the future of Janus. Whether it's code, ideas, or feedback, we welcome your input. 

Janus is more than just a tool; it's a step towards a more connected and interactive open-source community. Join us in this exciting journey to reshape developer collaboration on GitHub.

#### Cool Unaffiliated Projects also called Janus

Serendipitously there is another pre-existing WebRTC project called Janus: [Janus-Gatway WebRTC Server is an open source, general purpose, WebRTC server designed and developed by Meetecho - the RTC experts.](https://github.com/meetecho/janus-gateway). While we don't know anything about them, they're popular and it's cool they use the same name. You should check them out! :)

-----

**Like WebRTC? You might be interested in another project I work on that uses it: [BrowserBox/BrowserBox - a remote browser](https://github.com/BrowserBox/BrowserBox)** Reach out: [Email us](mailto:cris@dosyago.com)
