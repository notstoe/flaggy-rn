module.exports = {
  env: {
    node: true,
  },
  extends: ["expo", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "react-native", "@typescript-eslint", "@tanstack/eslint-plugin-query"],
  rules: {
    "prettier/prettier": "warn",
    "react-native/no-inline-styles": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-undef": ["warn"],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
};
