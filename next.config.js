/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
      @use "~@styles/abstracts/variables.scss";
      @use "~@styles/abstracts/mixins.scss";
      @use "~@styles/abstracts/utilities.scss";
    `,
  },
};
