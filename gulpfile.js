'use strict'

const gulp = require('gulp')
const yaml = require('js-yaml')
const fs = require('fs')
const _ = require('lodash')
const customConfigFile = './gulp-config.local.yml'
let config = yaml.safeLoad(fs.readFileSync('./gulp-config.yml', 'utf8'))

// Load in custom config
try {
  fs.statSync(customConfigFile)
  const customConfig = yaml.safeLoad(fs.readFileSync(customConfigFile, 'utf8'))
  config = _.merge(config, customConfig)
} catch (e) {
  console.log('Add a gulp-config.local.yml file for any custom configuration.')
}

// Load all default tasks.
require('ucd-theme-tasks')(gulp, config)
