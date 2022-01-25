import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

function AppLink({
  to,
  children,
  ...props
}: {
  to: string;
  children: string;
  [x:string]: any;
}) {
  if (to.startsWith(":")) {
    const data = useStaticQuery(graphql`
      query {
        allMdx {
          nodes {
            id
            slug
          }
        }
      }
    `);
    const slug = data.allMdx.nodes.find((i) => i.id === to.substring(1)).slug;
    return (
      <Link to={"/docs/" + slug} {...props}>
        {children}
      </Link>
    );
  } else if (to.startsWith("http")) {
    return (
      <a href={to} download {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

export default AppLink;
