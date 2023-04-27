module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: [2, "double", "avoid-escape"],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
  },
  resolve: {
    extensions: ".js",
  },
};
