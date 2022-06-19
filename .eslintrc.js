module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    "no-debugger": "off",
    "func-names": ["error", "never"],
    "no-console": "off",
    "no-unused-vars": "off",
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        selfClosingTag: "never"
      }
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        multiline: "never"
      }
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
          allowFirstLine: true
        },
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
};
