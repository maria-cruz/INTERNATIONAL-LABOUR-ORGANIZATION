/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
      @import "~@styles/abstracts/variables.scss";
      @import "~@styles/abstracts/mixins.scss";
      @import "~@styles/abstracts/utilities.scss";
    `,
  },
};
