
import * as React from 'react'
import { graphql } from 'gatsby'

import DocPage from '../../components/doc-page';

export default function({data}) {    

    return (
      <DocPage 
        docName={getDocName(data.mdx.slug)} 
        title={data.mdx.frontmatter.title}
        body={data.mdx.body}
      />
    );

}

function getDocName(slug: string): string|null {
  return slug.split("/")[0] || null;  
}

export const q = graphql`
query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title        
      }
      slug
      body
    }
  }
`