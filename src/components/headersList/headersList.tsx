import React from "react";

function HeadersList({ mdxAST }) {
  return (
    <aside style={{ backgroundColor: "dodgerblue" }}>
      <div style={{ position: "sticky", top: 0 }}>
        {mdxAST.children.map(
          (rootItem) =>
            rootItem.type === "heading" &&
            rootItem.depth === 2 && (
              <div
                style={{
                  marginBottom: 25,
                  backgroundColor: "red",
                  padding: "10px",
                  cursor: "pointer",
                }}
              >
                <a href={"#" + rootItem.children[0].value}>
                  <span>{rootItem.children[0].value}</span>
                </a>
              </div>
            )
        )}
      </div>
    </aside>
  );
}

export default HeadersList;
