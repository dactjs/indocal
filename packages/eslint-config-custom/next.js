const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  ignorePatterns: ["node_modules/", "dist/"],
  parserOptions: { project },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "eslint-config-turbo",
  ].map(require.resolve),

  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "react/jsx-sort-props": "off",
  },
};
