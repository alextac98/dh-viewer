FROM ubuntu

RUN apt update && apt upgrade -y

RUN apt install -y --no-install-recommends \
    vim 

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
RUN apt install -y nodejs

# Remove APT lists
RUN rm -rf /var/lib/apt/lists/*

# Set up workspace
RUN mkdir -p /home/$USERNAME/ws
WORKDIR /home/$USERNAME/ws