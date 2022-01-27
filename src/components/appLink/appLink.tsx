import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

function AppLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: string;
  [x:string]: any;
}) {
  if (href.startsWith(":")) {
    const data = useStaticQuery(graphql`
      query {
        allMdx {
          nodes {
            slug
            frontmatter {
              title
              id
            }
          }
        }
      }
    `);
    const slug = data.allMdx.nodes.find((i) => i.frontmatter.id === href.substring(1)).slug;
    return (
      <Link to={"/docs/" + slug} {...props}>
        {children}
      </Link>
    );
  } else if (href.startsWith("http")) {
    return (
      <a href={href} download {...props}>
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
