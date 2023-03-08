modul.exports = {
  env: { es2022: true, node: true },
  extends: ["airbnb-base", "plugin:node/recommended"],
  parserOptions: { sourceType: "module", ecmaVersion: 13 },
  rules: {
    "operator-linebreak": "off",
    "linebreak-style": "off",
    "no-restricted-syntax": "off",
    "max-len": ["error", { code: 120 }],
    "no-useless-concat": "warn",
    "consistent-return": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    indent: [
      "error",
      2,
      { offsetTernaryExpressions: true, SwitchCase: "warn" },
    ],
    "arrow-body-style": [
      "warn",
      "as-needed",
      { requireReturnForObjectLiteral: false },
    ],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 6,
          consistent: true,
        },
        ObjectPattern: { multiline: true, minProperties: 6, consistent: true },
        ImportDeclaration: {
          multiline: true,
          minProperties: 6,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
          consistent: false,
        },
      },
    ],
    "object-property-newline": [
      "error",
      { allowAllPropertiesOnSameLine: true },
    ],
  },
};