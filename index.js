module.exports = function schemeless (url) {
  if (!url || typeof (url) !== 'string') return url

  var schemey = new RegExp('^https?://(www.)?', 'i')
  var slashy = new RegExp('/$')

  return url
    .replace(schemey, '')
    .replace(slashy, '')
}
