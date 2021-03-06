const fs = require('fs')
const path = require('path')

module.exports = (api, { config, lintOn = [] }, _, invoking) => {
  if (typeof lintOn === 'string') {
    lintOn = lintOn.split(',')
  }

  const eslintConfig = require('../eslintOptions').config(api)

  const pkg = {
    scripts: {
      lint: 'svelte-cli-service lint'
    },
    eslintConfig,
    // TODO:
    // Move these dependencies to package.json in v4.
    // Now in v3 we have to add redundant eslint related dependencies
    // in order to keep compatibility with v3.0.x users who defaults to ESlint v4.
    devDependencies: {
      'babel-eslint': '^10.0.1',
      'eslint': '^5.16.0',
      'eslint-plugin-svelte3': '^1.2.3'
    }
  }

  const injectEditorConfig = (config) => {
    const filePath = api.resolve('.editorconfig')
    if (fs.existsSync(filePath)) {
      // Append to existing .editorconfig
      api.render(files => {
        const configPath = path.resolve(__dirname, `./template/${config}/_editorconfig`)
        const editorconfig = fs.readFileSync(configPath, 'utf-8')

        files['.editorconfig'] += `\n${editorconfig}`
      })
    } else {
      api.render(`./template/${config}`)
    }
  }

  if (config === 'airbnb') {
    eslintConfig.extends.push('@svel/airbnb')
    Object.assign(pkg.devDependencies, {
      '@svel/eslint-config-airbnb': '*'
    })
    injectEditorConfig('airbnb')
  } else if (config === 'standard') {
    eslintConfig.extends.push('@svel/standard')
    Object.assign(pkg.devDependencies, {
      '@svel/eslint-config-standard': '*'
    })
    injectEditorConfig('standard')
  } else if (config === 'prettier') {
    eslintConfig.extends.push('@svel/prettier')
    Object.assign(pkg.devDependencies, {
      '@svel/eslint-config-prettier': '*'
    })
    // prettier & default config do not have any style rules
    // so no need to generate an editorconfig file
  } else {
    // default
    eslintConfig.extends.push('eslint:recommended')
  }

  if (!lintOn.includes('save')) {
    pkg.vue = {
      lintOnSave: false // eslint-loader configured in runtime plugin
    }
  }

  if (lintOn.includes('commit')) {
    Object.assign(pkg.devDependencies, {
      'lint-staged': '^8.1.5'
    })
    pkg.gitHooks = {
      'pre-commit': 'lint-staged'
    }
    pkg['lint-staged'] = {
      '*.{js,svelte}': ['svelte-cli-service lint', 'git add']
    }
  }

  api.extendPackage(pkg)

  // typescript support
  if (api.hasPlugin('typescript')) {
    applyTS(api)
  }

  // invoking only
  if (invoking) {
    if (api.hasPlugin('unit-mocha')) {
      // eslint-disable-next-line node/no-extraneous-require
      require('@svel/cli-plugin-unit-mocha/generator').applyESLint(api)
    } else if (api.hasPlugin('unit-jest')) {
      // eslint-disable-next-line node/no-extraneous-require
      require('@svel/cli-plugin-unit-jest/generator').applyESLint(api)
    }
  }

  // lint & fix after create to ensure files adhere to chosen config
  if (config && config !== 'base') {
    api.onCreateComplete(() => {
      require('../lint')({ silent: true }, api)
    })
  }
}

const applyTS = module.exports.applyTS = api => {
  api.extendPackage({
    eslintConfig: {
      extends: ['@svel/typescript'],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    devDependencies: {
      '@svel/eslint-config-typescript': '*'
    }
  })
}
