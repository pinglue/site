
import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";

export default function({docName}) {

    // build time data - list of mdx files
    const data = useStaticQuery(graphql`
    query {
        allMdx(sort: {order: ASC, fields: slug}) {
          nodes {
            id
            slug
            frontmatter {
              title
            }
          }
        }
      }
    `);

    // TODO: convert this to a nested object model -> then create a nested TOC out of it (also scope it to docName, i.e., filter nodes based on the fact that the first slug term should be equal to docName)
    const nodes = data.allMdx.nodes;

    console.log("All mdx nodes:", nodes);
    

    return (
        <article style={{backgroundColor: "lightblue"}}>
            <p>TODO - I need to show a table of content for the doc "{docName}" based on list of mdxNodes </p>
        </article>
    )

}