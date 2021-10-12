FROM ubuntu

ENV DEBIAN_FRONTEND="noninteractive"

RUN apt update && apt upgrade -y

RUN apt install -y --no-install-recommends \
    vim git

# Create a basic user
ARG USERNAME=user
ARG USER_UID=1000
ARG USER_GID=1000

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME

RUN apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Install required things
RUN apt install -y nodejs npm
RUN npm install --silent
# RUN npm install react-scripts --silent

# Remove APT lists
RUN rm -rf /var/lib/apt/lists/*

# [Optional] Add sudo support. Omit if you don't need to install software after connecting.
RUN apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set up workspace
RUN mkdir -p /home/$USERNAME/ws
WORKDIR /home/$USERNAME/ws