// @ts-check

/** @typedef {import('@markuplint/ml-config').Config} Config */

/**
 * @type {Config}
 * @see https://markuplint.dev/docs/configuration
 */
const config = {
  extends: [
    'markuplint:recommended'
  ],
  parser: {
    '\\.vue$': '@markuplint/vue-parser'
  },
  specs: {
    '\\.vue$': '@markuplint/vue-spec'
  },
  excludeFiles: [
    './dist/**/*',
    './node_modules/**/*'
  ],
  rules: {
    'invalid-attr': {
      options: {
        attrs: {
          // https://kazupon.github.io/vue-i18n/api/#place
          place: {
            type: 'Any'
          }
        }
      }
    }
  },
  nodeRules: [
    {
      selector: 'v-text-field',
      rules: {
        'invalid-attr': {
          options: {
            attrs: {
              // https://v15.vuetifyjs.com/en/components/text-fields
              'autofocus': {
                type: 'Boolean'
              }
            }
          }
        }
      }
    }
  ]
}

module.exports = config
