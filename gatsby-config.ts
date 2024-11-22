import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `orismedicallab`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'FAQ',
        link: '/faq'
      },
      {
        name: 'Contact Us',
        link: '/contact'
      },
    ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-theme-ui", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": `${__dirname}/src/images`
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages`
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "components",
        "path": `${__dirname}/src/components`
      },
      __key: "components"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "reduxfolder",
        "path": `${__dirname}/src/reduxfolder`
      },
      __key: "reduxfolder"
    },
    {
      resolve: 'gatsby-plugin-svgr-loader',
      options: {
        "path": "./src/images/"
      },
    },
    // {
    //   resolve: `gatsby-plugin-react-svg`,
    //   options: {
    //     rule: {
    //       include: `${__dirname}/src/images/svgs`, // Where your SVGs are stored
    //     },
    //   },
    // },
  ]
};

export default config;
