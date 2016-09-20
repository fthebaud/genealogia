// specifics for angular / javascript front
module.exports = {

  extends: ['eslint-config-angular'],

  parserOptions: {
    sourceType: 'script'
  },

  env: {
    node: false,
    browser: true
  },

  rules: {
    //angular specific
    'angular/log': 'warn'
  }
}
