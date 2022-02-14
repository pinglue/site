
const {fsPath, DOCS_INFO} = require("./configs");

// plugins
const plugins = [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: fsPath,
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

    // local plugins
    "mdx-transformer",
    "slug-dup-guard"
  ];


module.exports = {
  siteMetadata: {
    siteUrl: "https://pinglue.org",
    title: "Pinglue org website",
    docsInfo: DOCS_INFO
  },
  plugins
};
