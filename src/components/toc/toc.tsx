import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";

import { toTocNodes } from "./utils";
import { tocLists } from "./global-toc-nodes";
import { TocNode } from "./toc-node";
import TocItem from "./tocItem";
import TocSection from "./tocSection";

export default function Toc ({ docName, slug }) {
  // build time data - list of mdx files
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: ASC, fields: slug }) {
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

  const nodes: [] = data.allMdx.nodes;

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
    <article className="ss-toc">
      <ul className="ss-toc__menu">
        {list.map((item) =>
          item.children.length === 0 ? (
            <TocItem item={item} slug={slug} />
          ) : (
            <TocSection item={item} slug={slug} list={list} setList={setList} />
          )
        )}
      </ul>
    </article>
  );
}
