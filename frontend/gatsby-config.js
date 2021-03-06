require('dotenv').config({
  path: `.env`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        collectionTypes: ['service', 'job', 'project', 'team-member'],
        singleTypes: [`homepage`, `aboutpage`, `global`, `menu`],
        queryLimit: 1000,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: `#283849`,
        theme_color: `#283849`,
        display: `minimal-ui`,
        icon: `src/assets/images/lemonhive.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
