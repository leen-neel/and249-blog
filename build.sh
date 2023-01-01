#!/bin/bash

npm run build
zip -r site.zip ./dist

figlet "Site built!"
