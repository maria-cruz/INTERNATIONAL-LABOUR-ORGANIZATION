/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "common/styles")],
    prependData: `@import "~@common/styles/main.scss";`,
  },
};
