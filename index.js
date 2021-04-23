module.exports = {
  extends: ['stylelint-config-sass-guidelines'],
  plugins: ['stylelint-scss', 'stylelint-no-unsupported-browser-features'],
  rules: {
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning'
      }
    ],
    'order/properties-alphabetical-order': null,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
        severity: 'warning'
      }
    ],
    'selector-class-pattern': [
      '',
      {
        severity: 'warning'
      }
    ],
    'order/order': null,
    'selector-max-compound-selectors': 5,
    'string-quotes': 'double',
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'max-nesting-depth': null,
    'scss/at-mixin-pattern': null,
    'function-parentheses-space-inside': 'never-single-line'
  }
};