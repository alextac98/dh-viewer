# Developing DH Viewer

The  DH Viewer project is built using Node.js running in a docker container. While you can develop this project with a local version of npm and node.js, these instructions will be for using VS Code with the development container feature.

## Setup

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