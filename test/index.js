var schemeless = require('..')
var test = require('tap').test

test('schemeless', function (t) {
  t.equal(schemeless('https://example.com'), 'example.com', 'remove https')
  t.equal(schemeless('http://foo.example.com'), 'foo.example.com', 'remove http')
  t.equal(schemeless('HTTP://LOUDBOT.COM'), 'LOUDBOT.COM', 'ignore case')
  t.equal(schemeless('http://www.oldschool.com'), 'oldschool.com', 'remove www')
  t.equal(schemeless('https://website.com/'), 'website.com', 'remove trailing slash')
  t.equal(schemeless('https://a.com/package/foo#fragment'), 'a.com/package/foo#fragment', 'respect path')
  t.end()
})
