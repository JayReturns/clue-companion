import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    rules: {
      'semi': ['error', 'always'],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'always'
          },
          svg: 'always',
          math: 'always'
        }
      ],
      'indent': ['error', 2],
      'camelcase': 'error',
      // Single quotes
      quotes: ['error', 'single'],
      // No unused vars
      'no-unused-vars': 'error',
      // No console.log
      'no-console': 'error',
      'vue/html-self-closing': 'error',
      'vue/attribute-hyphenation': 'error',
      'vue/html-indent': ['error', 2],
      'vue/html-closing-bracket-newline': ['error', {
        singleline: 'never',
        multiline: 'never'
      }],
      // 'vue/html-closeing-bracket-spacing': 'error',
      // 'vue/html-max-attributes-per-line': ['error', {
      //   singleline: {
      //     max: 4,
      //   },
      //   multiline: {
      //     max: 1,
      //   }
      // }],
      'vue/v-bind-style': 'error',
      'vue/v-on-style': 'error',
      'vue/v-slot-style': 'error',
    }
  }
];
