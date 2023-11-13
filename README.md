## Janus - Simple P2P Developer Text Chat and P2P Blog on GitHub

### Description:

Janus is an innovative project that leverages WebRTC and GitHub's API to create a platform where developers can host a peer-to-peer (P2P) blog and engage in real-time text chats. Initially conceived as a project involving GitHub Actions, it evolved into a system that directly interacts with GitHub's API for polling and commenting on issues, facilitating P2P connections.

### How to Use Janus:

1. **Setup**: Clone the repository and set the required environment variables (`GH_ACCESS_TOKEN` and `REPO_URL`).
2. **Running Janus**: Launch the `run-page.js` script. This script uses GitHub API to poll your repository for issues and uses them to initiate P2P connections.
3. **Publishing Blog Content**: Write your blog content in `blog.html`. The content is sent over WebRTC to visitors on your static GitHub Pages site.
4. **Chatting with Visitors**: Engage in text chats with visitors. The chat interface is available in the console of `run-page.js`.

### Technical Overview:

- **WebRTC for P2P Communication**: Establishes direct, peer-to-peer connections between the developer and visitors, facilitating real-time chat and content sharing.
- **GitHub API for Connection Initiation**: Uses GitHub issues as a medium to start P2P connections. The static GitHub Pages site serves as the client, receiving blog content and chat messages.
- **Security and Privacy**: Communication is P2P, reducing exposure to third-party servers. However, caution should be exercised, as the system involves direct connections to your machine.

### Security Risks and Limitations:

- **WebRTC Exposure**: Direct P2P connections could potentially expose your local environment. Ensure your system is secure and consider using VPNs or firewalls for additional protection.
- **GitHub Token Security**: The GitHub token used for polling issues should be handled securely to prevent unauthorized access to your repository.
- **Content Filtering**: Be cautious about the content shared over the chat, as it's directly transmitted between peers.
- **Browser Security**: Running in a headless browser with certain security features disabled (like CORS) could have implications depending on your local setup and network environment.

### Future Enhancements:

- **UI Improvements**: Enhance the chat interface for a better user experience.
- **Advanced Security Features**: Implement additional layers of security and encryption.
- **Scalability**: Optimize the system for handling multiple simultaneous connections.

### Contribution:

Contributions to Janus are welcome! Whether it's feature enhancements, bug fixes, or documentation, your input is valuable. Please refer to the contribution guidelines for more details.

