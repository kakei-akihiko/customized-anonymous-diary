import pluginVue from 'eslint-plugin-vue'
import importPlugin from 'eslint-plugin-import'
import nPlugin from 'eslint-plugin-n'
import promisePlugin from 'eslint-plugin-promise'
import standardRaw from 'eslint-config-standard'
import allGlobals from 'globals'

const {
  parserOptions,
  env,
  globals,
  ...standardRest
} = standardRaw

const envGlobals = Object.entries(env || {}).reduce((acc, [name, enabled]) => {
  if (!enabled || !allGlobals[name]) return acc
  return { ...acc, ...allGlobals[name] }
}, {})

const standardConfig = {
  ...standardRest,
  plugins: {
    import: importPlugin,
    n: nPlugin,
    promise: promisePlugin
  },
  languageOptions: {
    parserOptions,
    globals: {
      ...envGlobals,
      ...globals,
      Node: 'readonly',
      DOMParser: 'readonly',
      localStorage: 'readonly'
    }
  }
}

export default [
  {
    ignores: ['dist']
  },
  ...pluginVue.configs['flat/recommended'],
  standardConfig
]
