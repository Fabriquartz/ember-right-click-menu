'use strict';

module.exports = {
  root:          true,
  parser:        'babel-eslint',
  parserOptions: {
    ecmaVersion:  2018,
    sourceType:   'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  globals: {
    server:      true,
    lottie:      true,
    ActionCable: true
  },
  extends: ['eslint:recommended', 'plugin:ember-suave/recommended'],
  env:     {
    embertest: true,
    browser:   true,
    es6:       true
  },
  plugins: ['align-assignments', 'arca', 'ember'],
  rules:   {
    'align-assignments/align-assignments':             ['warn', { requiresOnly: false }],
    'arca/import-align':                               'error',
    'arca/newline-after-import-section':               'error',
    'arca/melted-constructs':                          'error',
    'arca/import-ordering':                            'error',
    'array-bracket-spacing':                           'off',
    camelcase:                                         ['error'],
    'ember/no-jquery':                                 'warn',
    'ember/use-ember-data-rfc-395-imports':            ['error'],
    'ember/new-module-imports':                        ['error'],
    'ember/no-function-prototype-extensions':          ['error'],
    'ember/no-old-shims':                              ['error'],
    'ember/no-unnecessary-route-path-option':          ['error'],
    'ember/no-unnecessary-service-injection-argument': ['error'],
    'ember/require-computed-macros':                   ['error'],

    'ember/avoid-leaking-state-in-ember-objects': ['warn'],
    'ember/computed-property-getters':            ['error'],

    'ember/jquery-ember-run':                                   ['error'],
    'ember/no-arrow-function-computed-properties':              ['error'],
    'ember/no-capital-letters-in-routes':                       ['error'],
    'ember/no-deeply-nested-dependent-keys-with-each':          ['error'],
    'ember/no-duplicate-dependent-keys':                        ['error'],
    'ember/no-ember-super-in-es-classes':                       ['error'],
    'ember/no-ember-testing-in-module-scope':                   ['error'],
    'ember/no-incorrect-calls-with-inline-anonymous-functions': ['error'],
    'ember/no-invalid-debug-function-arguments':                ['error'],
    'ember/no-side-effects':                                    ['warn'],
    'ember/require-super-in-init':                              ['error'],
    'ember/require-computed-property-dependencies':             ['error'],
    'ember/use-brace-expansion':                                ['warn'],

    'object-curly-spacing': ['error', 'always'],

    'no-console':  ['error', { allow: ['error'] }],
    quotes:        ['error', 'single', { allowTemplateLiterals: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    // indent:        [
    //   'error',
    //   2,
    //   {
    //     FunctionExpression:  { body: 1, parameters: 'first' },
    //     FunctionDeclaration: { body: 1, parameters: 'first' },
    //     CallExpression:      { arguments: 'off' },
    //     MemberExpression:    'off',
    //     ObjectExpression:    'off',
    //     ImportDeclaration:   'first',
    //     ArrayExpression:     'first',
    //     ignoredNodes:        ['ConditionalExpression']
    //   }
    // ],
    'key-spacing': [
      'error',
      {
        multiLine: { beforeColon: false },
        align:     { beforeColon: false, on: 'value' }
      }
    ],
    'max-len': ['error', { code: 90, ignorePattern: '^\\s*(import|test)' }],

    // 'multiline-ternary':       ['error', 'never'],
    'max-statements-per-line': 'off',
    'new-cap':                 'off',
    'operator-linebreak':      'off'
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node:    true
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended']
    }
  ]
};
