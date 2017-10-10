# ScrollRole
ScrollRole is an app for creating fifth edition (5e) D&D characters. The goal is for users to be able to customize their
own home brew rules for character-building. The 5e D&D Systems Reference Document (SRD) will serve as the default
configuration.


## Dev Environment Setup
- Install npm and node
- Download this repository
- `npm install package.json`


## Build Scripts
Run these commands from the root of the project.
- Watch and build all js/less/html:
    - `npm run watch`
- Build all js/less/html:
    - `npm run build`
- Start the ExpressJS app:
    - `npm run start`
- Build and deploy to the `dist` directory:
    - `npm run deploy`
- For other scripts, check the package.json file.


## Server Setup
- Install `git` and `npm`:
    ```
    sudo yum install git
    sudo yum install npm
    ```
- Clone the repository (to current directory):
  - `git clone https://github.com/NoBrainer/ScrollRole.git`
- Change directories:
  - `cd ScrollRole`
- Install the node packages:
  - `npm install -g`


## Deploying
- Use git to fetch and pull from `ScrollRole` directory
  ```
  git fetch
  git pull -f
  ```
- Run the deploy script
  - `npm run deploy`
- Copy front-end to `public_html` directory (make this an alias)
  - `sudo rsync -r /path/to/ScrollRole/dist/public/ /path/to/public_html`
- TODO: back-end


## Resources
- 5e D&D SRD
- font-awesome
- npm
- YAML
