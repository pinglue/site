
// Docs info
const DOCS_INFO = {
    pinglue: {},
    pgweb: {}
};

// File system info
const DEV_DOCS_PATH = "./dev-docs-src";
const DOCS_PATH = "./docs-src";
const DOCS_SRC_MAP = new Map()
    .set("local", DOCS_PATH)
    .set("git", DOCS_PATH)
const fsPath = DOCS_SRC_MAP.get(process.env.DOCS_SRC) || DEV_DOCS_PATH;

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
    "gatsby-plugin-sharp"
  ];


module.exports = {
  siteMetadata: {
    siteUrl: "https://pinglue.org",
    title: "Pinglue org website",
    docsInfo: DOCS_INFO
  },
  plugins
};
