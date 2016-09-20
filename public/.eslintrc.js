module.exports = {

  // specifics for angular / html / javascript front

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script'
  },

  env: {
    es6: true,
    browser: true
  },

  rules: {
    'no-console': 'warn',

    //angular specific
    'angular/di': [2, "array"],
    'angular/controller-as-vm': 0,
    'angular/log': 0
  }
}
