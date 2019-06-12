module.exports = {
  siteMetadata: {
    title: `Ibaslogic Site`,
    author: `Ibas Majid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `uu70uj9f995l`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `h18cTm-q8QwcWS8uHfUlYb_lshlPHX0W7V7zMNWdf-g`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
