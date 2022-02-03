import React from "react";
import { Link, navigate } from "gatsby";
import TocItem from "./tocItem";
import classnames from "classnames";

const TocSection = ({ item, slug, list, setList }) => {
  return (
    <li key={item.id}>
      <Link
        to={`/docs/${item.slug}`}
        className={classnames("ss-toc__item", {"ss-toc__item--active":slug === item.slug})}
      >
        {item.title}
      </Link>
      <ul className="ss-toc__menu">
        {item.children.map((sectionItem) => {
          if (sectionItem.children.length === 0)
          return <TocItem item={sectionItem} slug={slug} />
          else {
            return (
              <li key={sectionItem.id}>
                <div
                  className="ss-toc__item"
                  onClick={() => {
                    sectionItem.toggle();
                    setList([...list]);
                  }}
                >
                  <span>{sectionItem.title}</span>
                  <span
                    style={{
                      transform: `rotate(${
                        sectionItem.isExpanded ? "90" : "0"
                      }deg)`,
                    }}
                  >
                    <i className="bi-chevron-right"></i>
                  </span>
                </div>
                {sectionItem.isExpanded && (
                  <ul className="ss-toc__menu">
                    {sectionItem.children.map((subSectionTopic) => (
                      <TocItem item={subSectionTopic} slug={slug} />
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
};

export default TocSection;
