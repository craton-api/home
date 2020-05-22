/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: `Craton`,
    defaultTitle: `Craton | Easy-Peasy ECommerces Management`,
    siteTitleShort: `Craton`,
    siteDescription: `Craton is a platform focused on creating ecommerces`,
    siteUrl: `https://craton.netlify.app`,
    siteAuthor: `@craton`,
    siteImage: ``,
    siteLanguage: `en`,
    basePath: `/docs`,
    themeColor: `#13C354`,
    footer: ``
  },
  plugins: [
    `gatsby-plugin-layout`,
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        docsPath: `src/docs`,
        githubUrl: `https://github.com/@Craton/home`,
        baseDir: `docs/`,
        basePath: "/docs"
      }
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-typescript",
      options: {}
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages")
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"]
        }
      }
    },
    "gatsby-plugin-favicon"
  ]
};
