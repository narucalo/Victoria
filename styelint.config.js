// stylelint.config.js
module.exports = {
    extends: ['stylelint-config-recommended', 'stylelint-config-standard'],
    rules: {
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: ['tailwind', 'apply', 'layer', 'variants'],
        },
      ],
      // Add more Stylelint rules as needed
    },
  };
  