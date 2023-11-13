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

### Getting Started with Janus

#### Setting up Your GitHub Access Token

To use Janus, you'll need a GitHub Access Token with appropriate permissions. This token is used for interacting with the GitHub API – primarily for reading and writing comments on issues. Here's how you can generate your token:

1. **Log in to GitHub**: Visit [GitHub](https://github.com/) and sign in to your account.

2. **Access Personal Access Tokens Settings**:
   - Click on your profile picture in the top right corner.
   - Go to `Settings`.
   - In the left sidebar, click on `Developer settings`.
   - Then click on `Personal access tokens`.

3. **Generate New Token**:
   - Click on the `Generate new token` button.
   - Give your token a name in the `Note` field.
   - Select the scopes or permissions you want to grant this token. For Janus, you'll need the specific repository that you forked or generated Janues too, as well as the Contents read permission and the Issues read and write permission.
   - Click `Generate token` at the bottom of the page.

4. **Copy and Save Your Token**:
   - **Important**: Copy your new personal access token now. You won't be able to see it again!
   - Save it in a secure place, as you will need to use this token in the `GH_ACCESS_TOKEN` environment variable.

#### Cloning and Running Janus

1. **Clone the Repository**:
   ```
   git clone https://github.com/00000o1/janus.git
   ```

2. **Set Environment Variables**:
   - Set `GH_ACCESS_TOKEN` with the token you just generated.
   - Set `REPO_URL` with the URL of the GitHub repository you're using.

3. **Running Janus**:
   - Navigate to the Janus directory and run the `./local-webrtc-backend/run-page.js` script.
   - Follow the instructions in the script to start using Janus.


### Future Enhancements:

- **UI Improvements**: Enhance the chat interface for a better user experience.
- **Advanced Security Features**: Implement additional layers of security and encryption.
- **Scalability**: Optimize the system for handling multiple simultaneous connections.

### Contribution:

Contributions to Janus are welcome! Whether it's feature enhancements, bug fixes, or documentation, your input is valuable. Please refer to the contribution guidelines for more details.

