# @svel/eslint-config-prettier

> eslint-config-prettier for svelte-cli

This config is specifically designed to be used by `svelte-cli` setups
and is not meant for outside use (it can be used but some adaptations
on the user side might be needed - for details see the config file).

A part of its design is that this config may implicitly depend on
other parts of `svelte-cli` setups, such as `eslint-plugin-vue` being
extended in the same resulting config.
