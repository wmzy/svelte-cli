const {
  hasYarn,
  hasProjectYarn,
  hasPnpm3OrLater,
  hasProjectPnpm
} = require('@svel/cli-shared-utils')
const { loadOptions } = require('@svel/cli/lib/options')

exports.getCommand = function (cwd = undefined) {
  if (!cwd) {
    return loadOptions().packageManager || (hasYarn() ? 'yarn' : hasPnpm3OrLater() ? 'pnpm' : 'npm')
  }
  return hasProjectYarn(cwd) ? 'yarn' : hasProjectPnpm(cwd) ? 'pnpm' : 'npm'
}
