# <%= props.appname %>

[![Travis CI build status](https://img.shields.io/travis/<%= props.username %>/<%= props.appname %>.svg)](https://travis-ci.org/<%= props.username %>/<%= props.appname %>)
[![Dependency Status](https://img.shields.io/david/<%= props.username %>/<%= props.appname %>.svg)](https://david-dm.org/<%= props.username %>/<%= props.appname %>)
<% if (props.isNpmModule) { %>[![View on npm](https://img.shields.io/npm/dm/<%= props.appname %>.svg)](https://www.npmjs.com/package/<%= props.appname %>)
[![View on npm](https://img.shields.io/npm/v/<%= props.appname %>.svg)](https://www.npmjs.com/package/<%= props.appname %>)<% } %>

> <%= props.description %>


## Install

```
npm install --save <%= props.appname %>
```


## Usage

```js
var <%= props.camelAppName %> = require('<%= props.appname %>');

<%= props.camelAppName %>('army of kittens');
//=> 'Hello, army of kittens!'
```


## API

See [the API docs](api.md) for full documentation.


## License

[MIT](license) &copy; [<%= props.name %>][author]


[author]: https://github.com/<%= props.username %>
