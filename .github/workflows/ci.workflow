name: CI

on: push

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: actions/setup-node@v1
      with:
        node-version: 12.8.x
    - run: npm ci
    - run: npm run build
      env:
        CI: true
