1pif-to-csv
=======================

[![NPM](https://nodei.co/npm/1pif-to-csv.png)](https://nodei.co/npm/1pif-to-csv/) [![Build Status](https://travis-ci.org/joeybaker/1pif-to-csv.png?branch=master)](https://travis-ci.org/joeybaker/1pif-to-csv)


## Why
1Password4 only exports `.1pif` files, which are not very handy for sharing with other people without 1password. This cli tool that converts to CSV for easier sharing.

**NOTE: `.1pif` files are unencrypted. So is the CSV. If you're going to share the resulting file, please do so in a secure manner.**

## Installation
`npm i -g 1pif-to-csv`

## Usage

### CLI
```bash
$ 1pif-to-csv export.1pif > passwords.csv
```

This wil create a file the headings of: title, url, username, password.

### Node

```js
var pifToCSV = require('1pif-to-csv')
  , fs = require('fs')

pifToCSV(fs.createReadStream('./export.1pif')).pipe(process.stdout)
```

#### options
The only option is a readable stream to a `.1pif` file.

## tests
All tests are mocha. You can run them with either `npm test` or `mocha test`.

## Changelog
See `CHANGELOG.md`
