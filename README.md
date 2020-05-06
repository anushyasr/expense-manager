# expense-manager

A demo utility application to track daily expenses. 

# Tech Stack

- React
- Redux
- Local Storage for Persistence currently - planning to move to firebase.
- Webpack
- Babel
- Eslint

---

## Initial Setup

#### package.json

Create package.json file with necessary metadata information  

`npm init`

and provide necessary required informations.

---

## Install Development Dependencies

### Install Webpack dependencies

`npm i webpack webpack-cli webpack-dev-server --save-dev`

### Install Babel dependencies

`npm i @babel/core @babel/preset-env @babel/preset-react --save-dev`

### Instal Webpack Loaders

File Type | Loader
----------|-------
js/jsx | `npm i babel-loader --save-dev`
html | `npm i html-webpack-plugin html-loader --save-dev`
css | `npm i style-loader css-loader --save-dev `
assets | `npm i file-loader --save-dev`

### Install Eslint including react specific dependencies

I personally prefer airbnb style guide.

`npm i eslint eslint-plugin-react eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks --save-dev`

---

## Development Configurations

### Configure Webpack with all loaders and plugins

`Refer:  webpack.config.js file` 

### Configure Babel

`Refer:  .babelrc file`

### Configure Eslint

`Refer:  .eslintrc.json file`

---

## Install Application Dependencies

### Install React Dependencies

`npm i react react-dom prop-types`

### Install Redux Dependencies

`npm i redux react-redux`

### Install React Router

`npm i react-router-dom`

### Install Material-UI

`npm i @material-ui/core` 

`npm i @material-ui/pickers @date-io/date-fns@1.3.13 date-fns`

---

