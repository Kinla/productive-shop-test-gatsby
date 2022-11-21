/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `company`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Poppins`,
          file: `https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap`,
        },
        {
          name: `Inter`,
          file: `https://fonts.googleapis.com/css2?family=Inter&display=swap`,
        },
      ],
    },
  },
  {
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "ohll9cbv",
      "dataset": "production"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};