import pluginVue from 'eslint-plugin-vue'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default [
  {
    ignores: ["dist"]
  },
  ...pluginVue.configs['flat/recommended'],
  ...compat.extends(
    'standard'
  )
]
