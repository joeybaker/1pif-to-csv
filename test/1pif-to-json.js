/* global describe, it, beforeEach */
'use strict';

var chai = require('chai')
  , expect = chai.expect
  , toJSON = require('../lib/1pif-to-json.js')
  , fs = require('fs')
  , stream = require('stream')
  , path = require('path')
  , fixture = './fixture.1pif'

describe('1pif-to-json', function(){
  var file

  beforeEach(function(){
    file = fs.createReadStream(path.resolve(__dirname, fixture))
  })

  it('outputs a stream', function(){
    expect(toJSON(file)).to.be.instanceof(stream.Stream)
  })

  it('reads a 1pif file and converts to JSON', function(done){
    var count = 0

    toJSON(file)
      .on('data', function(data){
        count++
        expect(data).to.exist
        expect(data).to.be.an('object')
      })
      .on('error', function(err){
        expect(err).to.not.exist
      })
      .on('end', function(){
        expect(count).to.equal(3)
        done()
      })
  })
})
