#!/bin/sh

mkdir -p public
cd public

wget https://a.1stdibscdn.com/dist/fonts/MillerDisplay/MillerDisplay-Light.woff -O MillerDisplay-Light.woff
wget https://a.1stdibscdn.com/dist/fonts/MillerDisplay/MillerDisplay-LightItalic.woff -O MillerDisplay-LightItalic.woff
wget https://a.1stdibscdn.com/dist/fonts/ProximaNova/ProximaNova-Light.woff -O ProximaNova-Light.woff
wget https://a.1stdibscdn.com/dist/fonts/ProximaNova/ProximaNova-LightItalic.woff -O ProximaNova-LightItalic.woff
wget https://a.1stdibscdn.com/dist/fonts/ProximaNova/ProximaNova-Sbold.woff -O ProximaNova-Sbold.woff
wget https://remarkjs.com/downloads/remark-latest.min.js -O remark-latest.min.js
