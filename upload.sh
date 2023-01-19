#!/bin/bash

set -e -x

vps_name=${1:-oracle_vps}

# Build the project
cd envitech-web-app && npm run build

# Put the build in the appropriate place on the server
ssh $vps_name "sudo rm -rf /var/www/envitech-web-app"
scp -r build $vps_name:envitech-web-app
ssh $vps_name "sudo mv envitech-web-app /var/www/envitech-web-app"

# Remove the local build folder
rm -r build
