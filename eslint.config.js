import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue,js}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),

  {
    rules: {
      'array-bracket-spacing': ['error', 'never'],
      'arrow-parens': ['error'],
      'arrow-spacing': ['error'],
      'no-warning-comments': ['warn'],
      'brace-style': ['error'],
      camelcase: ['error'],
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': ['error'],
      curly: ['error'],
      'default-case': ['error'],

      indent: ['error', 2, {
        SwitchCase: 1,
      }],

      'key-spacing': ['error'],
      'keyword-spacing': ['error'],
      'linebreak-style': ['error', 'unix'],

      'max-statements-per-line': ['error', {
        max: 1,
      }],

      'new-cap': ['error'],

      'no-confusing-arrow': ['error', {
        allowParens: true,
      }],

      'no-console': ['error'],
      'no-eval': ['error'],

      'no-extra-boolean-cast': ['error', {
        enforceForLogicalOperands: true,
      }],

      'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
      'no-multi-spaces': ['error'],

      'no-multiple-empty-lines': ['error', {
        max: 2,
        maxBOF: 0,
        maxEOF: 0,
      }],

      'no-shadow': ['error'],
      'no-useless-return': ['error'],
      'no-var': ['error'],

      'no-restricted-imports': ['error', {
        patterns: [{
          group: ['@vue/*', 'vue'],
          importNames: ['defineProps', 'defineEmits'],
          message: "'defineProps' and 'defineEmits' can be used within <script setup> without importing.",
        }, {
          group: ['@casl/vue'],
          message: 'Importing @casl/can is restricted. Please use ability.js functionality to support paidFeatures',
        }],
      }],

      'object-curly-spacing': ['error', 'always'],

      quotes: ['error', 'single', {
        avoidEscape: true,
      }],

      semi: ['error'],
      'space-before-blocks': ['error'],
      'space-infix-ops': ['error'],
      'spaced-comment': ['error'],
      'vue/multi-word-component-names': ['off'],

      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 4,
        },

        multiline: {
          max: 1,
        },
      }],

      'vue/no-mutating-props': ['error'],
      'vue/no-v-html': ['error'],
      'vue/camelcase': ['error'],

      'vue/block-tag-newline': ['error', {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 0,

        blocks: {
          template: {
            singleline: 'always',
            multiline: 'always',
            maxEmptyLines: 0,
          },

          script: {
            singleline: 'always',
            multiline: 'always',
            maxEmptyLines: 0,
          },
        },
      }],

      'vue/no-multiple-template-root': ['off'],
      'vue/script-setup-uses-vars': ['off'],
    },
  },

  // {
  //   rules: {
  //     'semi': ['error', 'always'],
  //     'vue/html-self-closing': [
  //       'error',
  //       {
  //         html: {
  //           void: 'always',
  //           normal: 'never',
  //           component: 'always'
  //         },
  //         svg: 'always',
  //         math: 'always'
  //       }
  //     ],
  //     'indent': ['error', 2],
  //     'camelcase': 'error',
  //     // Single quotes
  //     quotes: ['error', 'single'],
  //     // No unused vars
  //     'no-unused-vars': 'error',
  //     // No console.log
  //     'no-console': 'error',
  //     'vue/html-self-closing': 'error',
  //     'vue/attribute-hyphenation': 'error',
  //     'vue/html-indent': ['error', 2],
  //     'vue/html-closing-bracket-newline': ['error', {
  //       singleline: 'never',
  //       multiline: 'never'
  //     }],
  //     'vue/html-closeing-bracket-spacing': 'error',
  //     'vue/v-bind-style': 'error',
  //     'vue/v-on-style': 'error',
  //     'vue/v-slot-style': 'error',
  //     'vue/multiline-html-element-content-newline': 'error',
  //     'vue/max-attributes-per-line': ['error', {
  //       singleline: {
  //         max: 4,
  //       },

  //       multiline: {
  //         max: 1,
  //       },
  //     }],
  //     'vue/multi-word-component-names': ['off'],
  //     'vue/block-tag-newline': ['error', {
  //       singleline: 'always',
  //       multiline: 'always',
  //       maxEmptyLines: 0,

  //       blocks: {
  //         template: {
  //           singleline: 'always',
  //           multiline: 'always',
  //           maxEmptyLines: 0,
  //         },

  //         script: {
  //           singleline: 'always',
  //           multiline: 'always',
  //           maxEmptyLines: 0,
  //         },
  //       },
  //     }],
  //   }
  // }
];
