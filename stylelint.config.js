module.exports = {
    extends: "stylelint-config-recommended",
    rules: {
      "at-rule-no-unknown": [true, {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer']
      }],
      "block-no-empty": null,
      "declaration-block-trailing-semicolon": null,
      "no-descending-specificity": null, // This might be needed depending on your project
    }
  };
  