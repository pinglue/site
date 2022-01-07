module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Pinglue org website",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: "./docs-src",
      },
      __key: "docs",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
              prompt: {
                user: "you",
                host: "linux-machine",
                global: true,
              }
            }
          }
        ]
      },
    },
    "gatsby-plugin-sharp",

  ],
};
