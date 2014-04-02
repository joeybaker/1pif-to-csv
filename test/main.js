'use strict';

var chai = require('chai')
  , expect = chai.expect
  , toCSV = require('../index.js')
  , fixture = './test/fixture.1pif'
  , stream = require('stream')

describe('1pif-to-csv', function(){
  it('reads a 1pif file and converts to csv', function(done){
    var csvStream = toCSV(fixture)

    expect(csvStream).to.be.an.instanceof(stream.Stream)

    csvStream
      .on('data', function(row){
        // this is what the first row should be (base on the fixture)
        expect(row).to.equal('"test","https://www.test.com/users/sign_up","email@test.com","password"\n')
        // pause after the first row
        csvStream.pause()
        done()
      })
  })
})
