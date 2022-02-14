import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import type {DocNodeMdx} from "../../commons";

function AppLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: string;
  [x:string]: any;
}) {

    const {allDoc: {nodes}}: {allDoc:{nodes:DocNodeMdx[]}} = useStaticQuery(graphql`
    query {
        allDoc(filter: {type: {eq: "mdx"}}) {
            nodes {
                slug                
                parent {
                    ... on Mdx {
                        frontmatter {
                            title
                            id
                        }
                    }
                }                
            }
        }
    }`);

  if (href.startsWith(":")) {    
    const slug = nodes.find((i) => i.parent.frontmatter?.id === href.substring(1))?.slug;
    return (
      <Link to={slug ? "/docs/" + slug : "/"} {...props}>
        {children}
      </Link>
    );
  } else if (href.startsWith("http")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}

export default AppLink;
