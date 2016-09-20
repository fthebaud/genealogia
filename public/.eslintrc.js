// specifics for angular / html / javascript front
module.exports = {

  extends: ['eslint-config-angular'],

  parserOptions: {
    sourceType: 'script'
  },

  env: {
    browser: true,
    node: false
  },

  rules: {
    'no-console': 'warn',

    //angular specific
    'angular/di': [2, "array"],
    'angular/controller-as-vm': 0,
    'angular/log': 0
  }
}
