/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const path = require("path");
const API_URL = process.env.API_URL ?? "";
const API_DOMAIN = process.env.API_DOMAIN ?? "";

module.exports = nextTranslate({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
      @import "~@styles/abstracts/variables.scss";
      @import "~@styles/abstracts/mixins.scss";
      @import "~@styles/abstracts/utilities.scss";
    `,
  },
  images: {
    domains: [API_DOMAIN],
  },
  env: {
    API_URL: API_URL,
  },
});
