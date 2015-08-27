# <%= props.appname %>

![](https://img.shields.io/travis/<%= props.username %>/<%= props.appname %>.svg)
[![Requirements Status](https://requires.io/github/<%= props.username %>/<%= props.appname %>/requirements.svg?branch=master)](https://requires.io/github/<%= props.username %>/<%= props.appname %>/requirements/?branch=master)
<% if (props.isNpmModule) { %>![](https://img.shields.io/npm/dm/<%= props.appname %>.svg)
![](https://img.shields.io/npm/v/<%= props.appname %>.svg)<% } %>

> <%= props.description %>


## Install

```
npm install --save <%= props.appname %>
```


## Usage

```js
var <%= props.camelAppName %> = require('<%= props.appname %>');

<%= props.camelAppName %>('unicorns');
//=> 'unicorns & rainbows'
```


## API

See [the API docs](api.md) for full documentation.


## License

[MIT](license) &copy; [<%= props.name %>][author]


[author]: https://github.com/<%= props.name %>/<%= props.appname %>
