# ScrollRole
ScrollRole is an app for creating fifth edition (5e) D&D characters. The goal is for users to be able to customize their
own home brew rules for character-building. The 5e D&D Systems Reference Document (SRD) will serve as the default
configuration.


## Dev Environment Setup
- Install git (see Server Setup for commands)
- Install nodejs & npm (see Server Setup for commands)


### Build Scripts
Run these commands from the root of the project.
- Download libraries:
    - `npm install`
- Build all js/css, watch for changes, start the ExpressJS app, restart on change:
    - `npm run watch`
- Build all js/css:
    - `npm run build`
- Start the ExpressJS app:
    - `npm run start`
- Install the config file for overriding:
    - `npm run install:config`
- For other scripts, check the package.json file.


## Server Setup

### 1. Install software and codebase
- Install git
    ```
    # Install:
    sudo yum install -y git
    # Verify version:
    git --version
    ```
- Install nodejs & npm
    ```
    # Add yum repository:
    curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -
    # Install:
    sudo yum install -y nodejs
    # Verify versions:
    node -v
    npm -v
    ```
- Install forver
    ```
    sudo npm install forever -g
    ```
- Clone the repository (to current directory):
  - `git clone https://github.com/NoBrainer/ScrollRole.git`
- Change directories:
  - `cd ScrollRole`
- Install the node packages:
  - `npm install -g`
- Install the config file:
  - `npm run install:config`
- Edit the `config.js` file one directory above `ScrollRole` to set ports, etc.


### 2. Make webapp service run at start-up
The script is the file named `scrollrole` in the `ScrollRole` directory.
- Deploy the script:
  ```
  sudo cp scrollrole /etc/rc.d/init.d
  sudo chmod 0755 /etc/rc.d/init.d/scrollrole
  ```
- Run the service:
  `sudo service scrollrole start`
- Set it to run at start-up:
  `sudo /sbin/chkconfig --level 345 scrollrole on`


## Deploying
- Stop the `scrollrole` app:
  ```
  sudo service scrollrole stop
  ```
- Update the `lastUpdated` in `scrollRoleConfig.js`
- Use git to fetch and pull from `ScrollRole` directory:
  ```
  git fetch
  git pull -f
  ```
- Run the build script:
  - `npm run build`
- Start the `scrollrole` app:
  ```
  sudo service scrollrole start
  ```


## Resources
- 5e D&D SRD
- font-awesome
- npm
- YAML
