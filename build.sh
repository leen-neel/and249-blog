#!/bin/bash

npm run build
cd ./dist
zip -r ../site.zip ./*

figlet "Site built!"
