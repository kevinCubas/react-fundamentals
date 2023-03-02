# React app configuration from scratch

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

```javascript
module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
}
```

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

```javascript
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },
};
```

or 

- Run
```cl
npx webpack init
```

- Command to bundle:
```cl
npx webpack
```

- Install 'html-webpack-plugin'

```cl
npm i html-webpack-plugin -D
```

> The plugin will generate an HTML5 file that includes all your webpack bundles in the body using script tags.

```javascript
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ...,
  output: {
    ...
  },
  resolve: {
    ...
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      ...
    ]
  },
};
```

- Install 'webpack-dev-server'

```cl
npm i webpack-dev-server -D
```

> development server that provides live reloading. This should be used for development only. It uses webpack-dev-middleware under the hood, which provides fast in-memory access to the webpack assets.

```javascript
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'public')
  },
};
```

### Development and Production
> Separate the production and development specific bits out, maintain a "common" configuration to keep things DRY. In order to merge these configurations together, we'll use a utility called **webpack-merge**
```cl
npm i webpack-merge -D
```

```javascript
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: ...,
  devtool:  ...
})
```

- Installing CSS loader
  - To import CSS files inside JSX file
```cs
npm i style-loader css-loader -D
```
\
*Only to use Sass*
- Installing **Sass** loader
```cs
npm i sass-loader -D
```

```javascript
module.exports = {
  entry: ...,
  output: {
    ...
  },
  resolve: {
    ...
  },
  plugins: [
    ...
  ],
  module: {
    rules: [
      ...,
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
};
```

- Fast Refresh
```cl
npm i  @pmmmwh/react-refresh-webpack-plugin react-refresh -D
```

```javascript
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool:  'eval-source-map',
  devServer: {
    static: path.resolve(__dirname, 'public')
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              require.resolve('react-refresh/babel')
            ]
          }
        }
      },
    ]
  }
});
```

### Source Maps
 > A source map is a file that maps from the transformed source to the original source, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.

## Typescript

- Installing Typescript

```cl
npm i typescript -D
```

- Initialize typescript - create ts.config
```cl
npx tsc --init
```

- Babel’s support for TypeScript
```cl
npm i @babel/preset-typescript -D
```
