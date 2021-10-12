#!/bin/sh
# This script is designed to be run inside the container after it is created
# It is executed in the 'workspaceFolder'
# For more info: https://code.visualstudio.com/docs/remote/devcontainerjson-reference

#######################################################################################

# Make User using local computer user/group IDs
sudo usermod -u $USER_ID user
sudo groupmod -g $GROUP_ID user