const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const Service = require('@svel/cli-service')
const { toPlugin, findExisting } = require('./lib/util')

const babelPlugin = toPlugin('@svel/cli-plugin-babel')
const eslintPlugin = toPlugin('@svel/cli-plugin-eslint')
const globalConfigPlugin = require('./lib/globalConfigPlugin')

const context = process.cwd()

function warnAboutNpmScript (cmd) {
  const packageJsonPath = path.join(context, 'package.json')

  if (!fs.existsSync(packageJsonPath)) {
    return
  }

  let pkg
  try {
    pkg = require(packageJsonPath)
  } catch (e) {
    return
  }

  if (!pkg.scripts || !pkg.scripts[cmd]) {
    return
  }

  let script = `npm run ${cmd}`
  if (fs.existsSync(path.join(context, 'yarn.lock'))) {
    script = `yarn ${cmd}`
  }

  console.log(`There's a ${chalk.yellow('package.json')} in the current directory.`)
  console.log(`Did you mean ${chalk.yellow(script)}?`)
}

function resolveEntry (entry, cmd) {
  entry = entry || findExisting(context, [
    'main.js',
    'index.js',
    'App.vue',
    'app.vue'
  ])

  if (!entry) {
    console.log(chalk.red(`Failed to locate entry file in ${chalk.yellow(context)}.`))
    console.log(chalk.red(`Valid entry file should be one of: main.js, index.js, App.vue or app.vue.`))

    console.log()
    warnAboutNpmScript(cmd)
    process.exit(1)
  }

  if (!fs.existsSync(path.join(context, entry))) {
    console.log(chalk.red(`Entry file ${chalk.yellow(entry)} does not exist.`))

    console.log()
    warnAboutNpmScript(cmd)
    process.exit(1)
  }

  warnAboutNpmScript(cmd)
  return {
    context,
    entry
  }
}

function createService (context, entry, asLib) {
  return new Service(context, {
    projectOptions: {
      compiler: true,
      lintOnSave: true
    },
    plugins: [
      babelPlugin,
      eslintPlugin,
      globalConfigPlugin(context, entry, asLib)
    ]
  })
}

exports.serve = (_entry, args) => {
  const { context, entry } = resolveEntry(_entry, 'serve')
  createService(context, entry).run('serve', args)
}

exports.build = (_entry, args) => {
  const { context, entry } = resolveEntry(_entry, 'build')
  const asLib = args.target && args.target !== 'app'
  if (asLib) {
    args.entry = entry
  }
  createService(context, entry, asLib).run('build', args)
}
