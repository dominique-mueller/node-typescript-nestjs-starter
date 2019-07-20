<div align="center">

# node-nestjs-typescript-starter

**Starter for [NestJS](https://nestjs.com/) projects using TypeScript**

</div>

<br><br>

## What it does

This is a starter project for NodeJS backend applications, based on the **[NestJS](https://nestjs.com/)** framework, written in
**[TypeScript](https://www.typescriptlang.org/)**. The setup comes with tasks for building and testing the application, further
aspects like linting and / or formatting are not defined but can easily be added on top.

**Here is where things get interesting:** This starter project uses **[Webpack](https://webpack.js.org/)** as its build tool. This enables us to deliver the production build of the application as a single minified JavaScrip bundle. *No copying of `node_modules` is necessary!*

> Also see the official **[Nest Framework TypeScript Starter](https://github.com/nestjs/typescript-starter)**.

<br><br>

## Commands

The following commands are available:

| Command                  | Description                                               | CI                 |
| ------------------------ | --------------------------------------------------------- | ------------------ |
| `npm start`              | Creates a development build, running in watch mode        |                    |
| `npm run build`          | Creates a production build                                | :heavy_check_mark: |
| `npm run test`           | Executes all unit tests                                   | :heavy_check_mark: |
| `npm run test:watch`     | Executes all unit tests, running in watch mode            |                    |
| `npm run test:e2e`       | Executes all end-to-end tests                             | :heavy_check_mark: |
| `npm run test:e2e:watch` | Executes all end-to-end tests, running in watch mode      |                    |

#### Build & Test Output

The `build` command will output the production bundle at `build/app.js`.

#### Test Coverage

The unit test coverage will be put into the `coverage` folder, while the end-to-end test coverage will be available in the `coverage-e2e`
folder.

<br><br>

## Creator

**Dominique Müller**

- E-Mail: **[dominique.m.mueller@gmail.com](mailto:dominique.m.mueller@gmail.com)**
- Website: **[www.devdom.io](https://www.devdom.io/)**
- Twitter: **[@itsdevdom](https://twitter.com/itsdevdom)**
