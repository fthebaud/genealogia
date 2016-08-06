module.exports = {
  root: true,

  extends: ['eslint:recommended', 'eslint-config-angular'],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script'
  },

  env: {
    browser: true,
    es6: true
  },

  globals: {
  },

  rules: {
    //Possible errors
    'comma-dangle': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-extra-semi': 'warn',
    'no-extra-parens': ['warn', 'functions'],

    //Best practices
    'eqeqeq': 'warn',
    'no-new': 'warn',
    'no-eval': 'warn',
    'curly': 'warn',
    'no-alert': 'warn',
    'no-unused-expressions': 'warn',
    'no-else-return': 'warn',
    'no-warning-comments': 'warn',
    //Best practices: complexity
    'complexity': ['warn', 10],
    'max-depth': ['warn', 3],
    'max-params': ['warn', 7],

    //variables
    'no-undef': 'warn',
    'no-unused-vars': ['warn', {
      'vars': 'all',
      'args': 'after-used'
    }],
    'no-use-before-define': ['warn', {
      'functions': false,
      'classes': false
    }],

    //Stylistic issues
    'no-array-constructor': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'new-cap': ['warn', {
      'newIsCap': true,
      'capIsNew': true
    }],
    'semi': 'warn',
    'quotes': ['warn', 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    //'quote-props': ['warn', 'as-needed'],
    'indent': ['off', 2], //off : problem with arrays indentation
    'no-trailing-spaces': 'warn',
    'space-before-function-paren': ['warn', {"anonymous": "always", "named": "never"}],
    'space-in-parens': ['warn', 'never'],
    'yoda': ['warn', 'never'],

    //angular specific
    'angular/di': [2,"array"],
    'angular/controller-as-vm': 0
  }
}
