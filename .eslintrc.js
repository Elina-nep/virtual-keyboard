module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["import"],
  extends: ["airbnb-base"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: [2, "double", "avoid-escape"],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    // "import/extensions": "always",
    "import/extensions": [
      "error",
      "always",
      {
        js: "always",
      },
    ],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "ignore", ":": "ignore" } },
    ],
  },
  // resolve: {
  //   extensions: ".js",
  // },
};
