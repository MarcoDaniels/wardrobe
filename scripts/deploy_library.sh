#!/usr/bin/env bash

# build library
yarn build:library

# copy package into lib/
cp package.json lib/

# goto lib/
cd lib/

# publish
npm publish
