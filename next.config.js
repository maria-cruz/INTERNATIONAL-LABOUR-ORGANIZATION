/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");
const path = require("path");

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
    domains: ["restcountries.eu"],
  },
  env: {
    API_URL: process.env.API_URL,
  },
});
