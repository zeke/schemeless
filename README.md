# schemeless

Remove http(s) string from the innerHTML of links on web pages.

### Installation
```sh
npm install schemeless --save
```

### Usage (with Browserify)

```js
var domready = require('domready')
var schemeless = require('schemeless')

domready(function(){
  schemeless()
})
```
