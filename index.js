'use strict';

var fs = require('fs')
  , through = require('through')
  , toJSON = require('./lib/1pif-to-json.js')
  , internals = {}

internals.pifItemToCSV = function parse(pifItem){
  var row = [pifItem.title, pifItem.location]
    , creds

  creds = pifItem.secureContents.fields.reduce(function reduceSecureContents(fields, field){
    if (field.designation === 'username') fields[0] = field.value
    if (field.designation === 'password') fields[1] = field.value
    return fields
  }, ['username', 'password'])

  return row.concat(creds).map(function quoteCell(cell){
    return '"' + cell + '"'
  }).join(',') + '\n'
}

module.exports = function(file){
  var out = through(function createCSVRow(pifItem){
    this.queue(internals.pifItemToCSV(pifItem))
  })

  toJSON(fs.createReadStream(file))
    .pipe(out)

  return out
}
