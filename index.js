module.exports = function() {

  var schemey = new RegExp("^https?:\/\/", "i")

  Array.prototype.slice.call(document.querySelectorAll('a'))
    .forEach(function(a){
      if (a.innerHTML.match(schemey))
        a.innerHTML = a.innerHTML.replace(schemey, '')
    })

}
