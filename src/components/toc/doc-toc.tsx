import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { toTocNodes } from "./utils";
import { tocLists } from "./global-toc-nodes";
import { TocNode } from "./toc-node";
import TocItem from "./tocItem";
import TocSection from "./tocSection";

import type {DocNode} from "../../commons";

export default function DocToc ({ docName, slug }) {
  // build time data - list of mdx files
  const data = useStaticQuery(graphql`
    query {
      allDoc(sort: { order: ASC, fields: sortSlug }) {
        nodes {
          id          
          slug
          sortSlug
          type
          parent {
            ... on Mdx {              
              frontmatter {
                title
              }
            }
          }          
        }
      }
    }
  `);

  const nodes = data.allDoc.nodes as DocNode[];

  // assigning titles
  for(const node of nodes) {
      if (node.type === "mdx")
        node.title = node.parent.frontmatter.title;
  }

  const [list, setList] = useState<TocNode[]>([]);

  useEffect(() => {
    if (!tocLists.get(docName).list) {
      const result = toTocNodes(nodes);
      tocLists.set(docName, {
        list: result.children.find((i) => i.path === docName).children,
      });
    }
    setList(tocLists.get(docName).list);
  }, []);

  return (
    <menu className="ss-toc">
      <ul className="ss-toc__menu">
        {list.map((item) =>
          item.children.length === 0 ? (
            <TocItem item={item} slug={slug} />
          ) : (
            <TocSection item={item} slug={slug} list={list} setList={setList} />
          )
        )}
      </ul>
    </menu>
  );
}
