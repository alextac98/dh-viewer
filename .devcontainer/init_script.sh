#!/bin/sh
# This script is designed to run on your local machine before the container is built
# For more info: https://code.visualstudio.com/docs/remote/devcontainerjson-reference
######################################################################################

# Set up User and Group IDs by adding them to an env file
USER_ID=$(id -u)
GROUP_ID=$(id -g)
BUILD_ENV=.devcontainer/build.env

rm $BUILD_ENV

printf "USER_ID=%s\n" "$USER_ID" >> $BUILD_ENV
printf "GROUP_ID=%s\n" "$GROUP_ID" >> $BUILD_ENV