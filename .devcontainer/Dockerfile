FROM ubuntu

ENV DEBIAN_FRONTEND="noninteractive"

RUN apt update && apt upgrade -y

RUN apt install -y --no-install-recommends \
    vim \               
    git \
    curl \
    ca-certificates \
    # Openssh client for pushing to git using ssh keys
    openssh-client 


# Create a basic user
ARG USERNAME=user
ARG USER_UID=1000
ARG USER_GID=1000

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME

# [Optional] Add sudo support. Omit if you don't need to install software after connecting.
RUN apt-get update \
    && apt-get install -y sudo \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

RUN chsh -s /bin/bash $USERNAME

# Set up workspace
RUN mkdir -p /home/$USERNAME/ws
WORKDIR /home/$USERNAME/ws

# Install required things
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt update && apt install -y nodejs


# Remove APT lists
RUN rm -rf /var/lib/apt/lists/*
