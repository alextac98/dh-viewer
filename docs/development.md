# Developing DH Viewer

The  DH Viewer project is built using Node.js running in a docker container. While you can develop this project with a local version of npm and node.js, these instructions will be for using VS Code with the development container feature.

The main benefit of developing using VS Code Dev Containers is the ease of setup. Once you have installed the docker daemon and built the container and image, the development environment is fully set up and ready for development. If you ever mess up your environment, simply rebuild the container and you are back up and ready to go. You can also set up custom VS Code extensions that are only useful for this specific project. Finally the setup is cross-platform and every developer (who chooses to develop with this) will have the exact same development environment, making reproducing bugs between developers much easier. Best of all, there should be little to no change between how you would normally develop a web app!

## Quick References
Running the app: `npm start`

Running unit tests: `npm test`
## Setup

### Prerequisites
You will need the following installed:
1. Docker-Desktop & Docker-Compose 
   1. Installation instructions for Docker-Desktop can be found here: https://docs.docker.com/get-docker/
   2. Post-installation steps can found here: https://docs.docker.com/engine/install/linux-postinstall/
   3. Installation instructions for Docker-Compose can be found here: https://docs.docker.com/compose/install/
   
2. Visual Studio Code

3. Visual Studio Code Remote Development Extension


### Starting up the development environment
For your first time, you will need to build the development environment. Use the keybinding `ctrl+shift+p` or `cmd+shift+p` to open the VS Code command prompt and type `Remote Container Rebuild and Reopen`. Select the option that says `Remote-Containers: Rebuild and Reopen in Container`

Once you've built the environment, you do not have to rebuild every time. Use the keybinding `ctrl+shift+p` or `cmd+shift+p` to open the VS Code command prompt and type `Remote Container Reopen`. Select the option that says `Remote-Containers: Reopen in Container`

If you ever change the `.devcontainer` directory or mess up your development container, simply rebuild the container by opening the VS Code command prompt and select `Remote-Containers: Rebuild and Reopen in Container`

### Setting up git in devcontainer
The Remote - Containers extension automatically copies the local `.gitconfig` to the container at startup. Make sure you have set up your git user name and email address:
``` bash
git config --global user.name "Your Name"
git config --global user.email "your.email@address"
```
If you are using ssh keys, you will also need to set up a local ssh agent.

1. Add your local ssh keys to the ssh agent using the `ssh-add` command
``` bash
ssh-add $HOME/.ssh/github_rsa
```
2. You may get an error if the agent is not running in the background. Follow the steps below if this is the case for Windows or Linux (MacOS has it running by default)

#### **Windows**
Start a local Administrator PowerShell and run the following commands:
``` powershell
Set-Service ssh-agent -StartupType Automatic
Start-Service ssh-agent
Get-Service ssh-agent
```
Make sure you are running as an Administrator
#### **Linux**
Start the SSH Agent in the background:
``` bash
eval "$(ssh-agent -s)"
```
Add this line to your `~/.bash_profile` (for bash users) or `~/.zprofile` (for zsh users) so it starts on login:
``` sh
# Set up ssh agent for VS Code Dev Environments
# https://code.visualstudio.com/docs/remote/containers#_sharing-git-credentials-with-your-container
if [ -z "$SSH_AUTH_SOCK" ]; then
   # Check for a currently running instance of the agent
   RUNNING_AGENT="`ps -ax | grep 'ssh-agent -s' | grep -v grep | wc -l | tr -d '[:space:]'`"
   if [ "$RUNNING_AGENT" = "0" ]; then
        # Launch a new instance of the agent
        ssh-agent -s &> $HOME/.ssh/ssh-agent
   fi
   eval `cat $HOME/.ssh/ssh-agent`
fi
```

**Source:** https://code.visualstudio.com/docs/remote/containers#_sharing-git-credentials-with-your-container

## Development with NodeJS in the Dev Container

### Developing the App
To start the app in development mode, run the following command:
``` bash
npm start
```
This will open the app at [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-reload if you make any edits. You can also see any lint errors in the console.

### Running Unit Tests
To run unit tests, run the following command:
``` bash
npm test
```
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.