module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  ignorePatterns: [
    "*.js",
    "dist/*",
    "node_modules/*",
    "/src/generated/*",
    "/infrastructure/cdk.out/*",
  ],
  plugins: ["react-refresh"],
  rules: {
    "arrow-body-style": "error",
    "react-refresh/only-export-components": "warn",
  },
};
