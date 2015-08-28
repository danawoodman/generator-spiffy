# <%= props.appname %>

![](https://img.shields.io/travis/<%= props.username %>/<%= props.appname %>.svg)
[![Dependency Status](https://img.shields.io/david/<%= props.username %>/<%= props.appname %>.svg)](https://david-dm.org/<%= props.username %>/<%= props.appname %>)
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


[author]: https://github.com/<%= props.username %>/<%= props.appname %>
