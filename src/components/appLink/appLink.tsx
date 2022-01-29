import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { paramCase } from 'param-case';

function AppLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: string;
  [x:string]: any;
}) {

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
    }`);

  if (href.startsWith(":")) {    
    const slug = data.allMdx.nodes.find((i) => i.frontmatter?.id === href.substring(1))?.slug;
    const formattedSlug = slug.split("/").map(i => paramCase(i)).join("/")
    return (
      <Link to={slug ? "/docs/" + formattedSlug : "/"} {...props}>
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
