// dev only

const path = require('path')
const { linkBin } = require('./linkBin')

module.exports = function setupDevProject (targetDir) {
  return linkBin(
    require.resolve('@svel/cli-service/bin/cli-service'),
    path.join(targetDir, 'node_modules', '.bin', 'svelte-cli-service')
  )
}
