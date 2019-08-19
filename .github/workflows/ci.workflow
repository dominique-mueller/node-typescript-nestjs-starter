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

  test:
    name: Test
    needs: build
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: actions/setup-node@v1
      with:
        node-version: 12.8.x
    - run: npm ci
    - run: npm run test
      env:
        CI: true

  e2e:
    name: Test (e2e)
    needs: build
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: actions/setup-node@v1
      with:
        node-version: 12.8.x
    - run: npm ci
    - run: npm run test:e2e
      env:
        CI: true
