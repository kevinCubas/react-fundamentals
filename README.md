# Chapter I

- **Init** the repository - Package.json
```
  npm init -y
```
- Install React and React-DOM
```
  npm i react react-dom
```

## Babel

> Babel is a JavaScript **compiler** used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- Install Babel

```cl
npm i @babel/core @babel/cli @babel/preset-env -D
```

> @babel/cli to use babel in the cmd

> @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

- Create a babel configuration file - babel.config.js

  - to see babel cli commands
```cl
npx babel -h
```

- To transpile React code

```cl
npm i @babel/preset-react -D
```

- Babel-loader to use with Webpack
> Babel loader uses presets to work with different JavaScript flavors and supersets.

```cl
npm i babel-loader -D
```

## Webpack

>  webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

- Install Webpack

```cl
npm i webpack webpack-cli -D
```

- Create a Webpack configuration file - webpack.config.js
  - To bundle:
```cl
npx webpack
```

- Install 'html-webpack-plugin'

```cl
npm i html-webpack-plugin -D
```

> The plugin will generate an HTML5 file that includes all your webpack bundles in the body using script tags.