'use strict'

const fs = require('fs')
const path = require('path')
const http = require('http')
const https = require('https')
const twitter = require('twitter-text')

const reset = '\x1b[0m'
const red = '\x1b[31m'
const green = '\x1b[32m'
const yellow = '\x1b[33m'

const filepath = path.resolve(__dirname, 'src', 'main.md')
fs.readFile(filepath, (err, data) => {
  if (err) {
    throw err
  }
  twitter.extractUrls(data.toString(), /https?/).map(url => {
    const scheme = url.startsWith('https:') ? https : http
    scheme
      .get(url, res => {
        const stat = res.statusCode
        const c = 200 <= stat && stat < 300 ? green : 100 <= stat && stat < 400 ? yellow : red
        console.log(`${c}${stat}   - ${url} (${res.statusMessage})${reset}`)
      })
      .on('error', e => {
        console.log(`${red}ERROR - ${url} (${e})${reset}`)
      })
  })
})
