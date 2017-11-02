require('babel-core/register')
const fs = require('fs.extra')

const webpack = require('webpack')

const config = require('./production.js').default

webpack(config, function(_error, stats) {
  console.log('-=callback started=-')
  const manifest = stats.toJson().assetsByChunkName
  fs.writeFile('webpack-manifest.json', JSON.stringify(manifest), function(err) {
    if (err) console.log(err)
    console.log('-=Exit=-')
    process.exit()
  })
})
