'use strict';

var split = require('split')
  , through = require('through')

module.exports = function(pif){
  var out = through(function write(data){
      if (data) this.emit('data', JSON.parse(data))
    })

  pif
    .pipe(split(/\n\*\*\*.*?\*\*\*\n/))
    .pipe(out)

  return out
}
