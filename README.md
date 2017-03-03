# schemeless

Remove the parts of URLs that humans don't really need to see.

## Examples

```
https://example.com       -> example.com
http://foo.example.com    -> foo.example.com
http://www.oldschool.com  -> oldschool.com
https://website.com/      -> website.com
https://a.com/foo#bar     -> a.com/foo#bar
HTTP://LOUDBOT.COM        -> LOUDBOT.COM
```

## Installation

```sh
npm install schemeless --save
```

## Usage

```js
var schemeless = require("schemeless")
schemeless("https://example.com")
```

## See Also

- [AnchorMe](http://alexcorvi.github.io/anchorme.js/) detects URLs and email address in text and converts them to clickable HTML anchor links.

## Test

```sh
npm install
npm test
```
