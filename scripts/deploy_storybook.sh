#!/usr/bin/env bash

FIREBASE_PROJECT_ID=${1}
TOKEN=${2}

# build application
yarn build:storybook

# install firebase tools
npm install -g firebase-tools

# deploy
firebase deploy --only hosting --project "$FIREBASE_PROJECT_ID" --token "$TOKEN"
