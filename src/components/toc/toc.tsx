import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import * as classes from "./toc.module.scss";

export default function ({ docName, slug }) {
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

  // console.log("All mdx nodes:", nodes);

  const [list, setList] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);

  const generateList = () => {
    if (list.length > 0) return;
    console.log(nodes.length);
    let tempResults = [];
    const withFormattedSlug = nodes.map((i: any) => {
      i.formattedSlug = i.slug.split("/");
      return i;
    });
    const thisDocNodes = withFormattedSlug.filter(
      (i) => i.formattedSlug[0] === docName
    );
    // Add root topics
    let rootTopics = thisDocNodes.filter((i) => {
      if (
        i.formattedSlug.length === 2 &&
        i.formattedSlug[1].includes("-topic")
      ) {
        return true;
      }
      return false;
    });
    rootTopics = rootTopics.map((i) => {
      i.type = "rootTopic";
      return i;
    });
    tempResults = [...tempResults, ...rootTopics];
    // Add root sections
    const rootSections = thisDocNodes.filter((i) => {
      if (i.formattedSlug.length === 3 && i.formattedSlug[2] === "section") {
        i.childs = [];
        i.type = "rootSection";
        return true;
      }
      return false;
    });
    // Add root section topics
    rootSections.forEach((i) => {
      thisDocNodes.forEach((j) => {
        if (
          j.formattedSlug.length === 3 &&
          j.formattedSlug[1] === i.formattedSlug[1] &&
          j.formattedSlug[2] !== "section"
        ) {
          j.type = "topic";
          i.childs.push(j);
        }
      });
    });
    // add subsection of each section
    rootSections.forEach((rootSection) => {
      thisDocNodes.forEach((node) => {
        if (
          node.formattedSlug.length === 4 &&
          node.formattedSlug[3] === "section" &&
          node.formattedSlug[1] === rootSection.formattedSlug[1]
        ) {
          node.type = "rootSubsection";
          node.isExpanded = false;
          rootSection.childs.push(node);
        }
      });
    });
    // add topics of subsections
    rootSections.forEach((rootSection) => {
      rootSection.childs.forEach((child) => {
        if (child.type === "rootSubsection") {
          thisDocNodes.forEach((node) => {
            if (
              node.formattedSlug.length === 4 &&
              node.formattedSlug[2] === child.formattedSlug[2] &&
              node.formattedSlug[3].includes("topic")
            ) {
              node.type = "subsectionTopic";
              if (child.childs && !child.childs.includes(node)) {
                child.childs.push(node);
              } else child.childs = [node];
            }
          });
        }
      });
    });
    tempResults = [...tempResults, ...rootSections];
    setList(tempResults);
  };

  console.log(classes);

  useEffect(() => {
    generateList();
  }, []);

  return (
    <article className={classes["leftSidebar"]}>
      <ul className={classes["leftSidebar__menu"]}>
        {list.map((rootItem, rootItemIndex) => {
          if (rootItem.type === "rootTopic")
            return (
              <li
                onClick={() => navigate(`/docs/${rootItem.slug}`)}
                key={rootItem.id}
                className={classes["leftSidebar__item"]}
                style={{
                  fontWeight: slug === rootItem.slug ? "900" : undefined,
                }}
              >
                {rootItem.frontmatter.title}
              </li>
            );
          else
            return (
              <li key={rootItem.id}>
                <Link
                  to={`/docs/${rootItem.slug}`}
                  className={classes["leftSidebar__item"]}
                  style={{ fontWeight: slug === rootItem.slug ? "900" : "600" }}
                >
                  {rootItem.frontmatter.title}
                </Link>
                <ul className={classes["leftSidebar__menu"]}>
                  {rootItem.childs.map((sectionItem) => {
                    if (sectionItem.type === "topic")
                      return (
                        <li
                          className={classes["leftSidebar__item"]}
                          key={sectionItem.id}
                          onClick={() => navigate(`/docs/${sectionItem.slug}`)}
                          style={{
                            fontWeight:
                              slug === sectionItem.slug ? "900" : undefined,
                          }}
                        >
                          {sectionItem.frontmatter.title}
                        </li>
                      );
                    if (sectionItem.type === "rootSubsection") {
                      const isExpanded = expandedItems.includes(sectionItem.id);
                      const handleExpand = () => {
                        if (expandedItems.includes(sectionItem.id)) {
                          const newExpanded = expandedItems.filter(
                            (i) => i !== sectionItem.id
                          );
                          setExpandedItems(newExpanded);
                        } else setExpandedItems((i) => [...i, sectionItem.id]);
                      };
                      return (
                        <li key={sectionItem.id}>
                          <div
                            className={classes["leftSidebar__item"]}
                            onClick={handleExpand}
                          >
                            <span>{sectionItem.frontmatter.title}</span>
                            <span
                              style={{
                                transform: `rotate(${
                                  isExpanded ? "90" : "0"
                                }deg)`,
                              }}
                            >
                              &gt;
                            </span>
                          </div>
                          {isExpanded && (
                            <ul className={classes["leftSidebar__menu"]}>
                              {sectionItem.childs.map((subSectionTopic) => (
                                <li
                                  key={subSectionTopic.id}
                                  className={classes["leftSidebar__item"]}
                                  onClick={() =>
                                    navigate(`/docs/${subSectionTopic.slug}`)
                                  }
                                  style={{
                                    fontWeight:
                                      slug === subSectionTopic.slug
                                        ? "900"
                                        : undefined,
                                  }}
                                >
                                  {subSectionTopic.frontmatter.title}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    }
                  })}
                </ul>
              </li>
            );
        })}
      </ul>
    </article>
  );
}
