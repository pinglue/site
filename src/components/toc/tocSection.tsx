import React from "react";
import { Link, navigate } from "gatsby";
import TocItem from "./tocItem";

const TocSection = ({ item, slug, list, setList }) => {
  return (
    <li key={item.id}>
      <Link
        to={`/docs/${item.slug}`}
        className="leftSidebar__item"
        style={{ fontWeight: slug === item.slug ? "900" : "600" }}
      >
        {item.title}
      </Link>
      <ul className="leftSidebar__menu">
        {item.children.map((sectionItem) => {
          if (sectionItem.children.length === 0)
          return <TocItem item={sectionItem} slug={slug} />
          else {
            return (
              <li key={sectionItem.id}>
                <div
                  className="leftSidebar__item"
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
                    &gt;
                  </span>
                </div>
                {sectionItem.isExpanded && (
                  <ul className="leftSidebar__menu">
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
