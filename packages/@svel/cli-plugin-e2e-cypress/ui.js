module.exports = api => {
  api.describeTask({
    match: /svelte-cli-service test:e2e/,
    description: 'org.vue.cypress.tasks.test.description',
    link: 'https://github.com/wmzy/svelte-cli/tree/dev/packages/%40svel/cli-plugin-e2e-cypress#injected-commands',
    prompts: [
      {
        name: 'headless',
        type: 'confirm',
        default: false,
        description: 'org.vue.cypress.tasks.test.headless'
      },
      {
        name: 'mode',
        type: 'list',
        default: 'development',
        choices: [
          {
            name: 'development',
            value: 'development'
          },
          {
            name: 'production',
            value: 'production'
          },
          {
            name: 'test',
            value: 'test'
          }
        ],
        description: 'org.vue.cypress.tasks.test.mode'
      },
      {
        name: 'url',
        type: 'input',
        default: '',
        description: 'org.vue.cypress.tasks.test.url'
      }
    ],
    onBeforeRun: ({ answers, args }) => {
      if (answers.headless) args.push('--headless')
      if (answers.mode) args.push('--mode', answers.mode)
      if (answers.url) args.push('--url=' + answers.url)
    }
  })
}
