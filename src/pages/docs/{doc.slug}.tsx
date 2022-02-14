import * as React from "react";
import { graphql } from "gatsby";

import DocPage from "../../components/doc-page";

import type {PageProps, DocNode} from "../../commons";

export default function ({ data }:{data: {doc: DocNode}}) {

    const {doc} = data

    const pageProps:PageProps = {
        docName: doc.docName,
        type: doc.type,
        slug: doc.slug,
        title: ""        
    }

    if (doc.type === "mdx") {
        pageProps.title = doc.parent.frontmatter.title || "";
        pageProps.data = {body: doc.parent.body, headings: doc.parent.headings};        
    }

  return (
    <DocPage {...pageProps}/>
  );
}

export const q = graphql`
  query MyQuery($id: String) {
    doc(id: { eq: $id }) {
        docName
        sortSlug
        slug
        type
        parent {
          ... on Mdx {
            id
            frontmatter {
              id
              title
            }
            headings {
              depth
              value
            }
            body
          }
        }        
    }
  }
`;
