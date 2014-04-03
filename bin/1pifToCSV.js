#! /usr/bin/env node

var path = require('path')

require('../index.js')(path.resolve(process.cwd(), process.argv[2])).pipe(process.stdout)
