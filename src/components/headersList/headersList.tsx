import React, { useState, useEffect } from "react";
import { paramCase } from "param-case";

function HeadersList({
  headings,
}: {
  headings?: { depth: number; value: string }[];
}) {
  const [data, setData] = useState<{ value: string; childs: string[] }[]>([]);
  const convertData = () => {
    const rootItemIndexes = [];
    const result = [];
    headings.forEach((item, index) => {
      if (item.depth === 2) rootItemIndexes.push(index);
    });
    headings.forEach((item, index) => {
      let toPush = { value: "", childs: [] };
      if (item.depth === 2) toPush.value = item.value;
      const nextIndex = rootItemIndexes.find((i) => i > index);
      headings.slice(index, nextIndex).forEach((j) => {
        if (j.depth === 3) toPush.childs.push(j.value);
      });
      if (toPush.value.length > 0) result.push(toPush);
    });
    setData(result);
  };
  useEffect(() => {
    convertData();
  }, headings);
  return (
    <aside style={{ backgroundColor: "dodgerblue" }}>
      <div style={{ position: "sticky", top: 0 }}>
        {data.map((i) => (
          <div
            style={{
              marginBottom: 25,
              backgroundColor: "red",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <a href={"#" + paramCase(i.value)}>
              <span>{i.value}</span>
            </a>
            {i.childs.length > 0 &&
              i.childs.map((j) => (
                <div
                  style={{
                    marginBottom: 25,
                    backgroundColor: "purple",
                    padding: "10px",
                    cursor: "pointer",
                    marginRight: 10,
                  }}
                >
                  <a href={"#" + paramCase(j)}>
                    <span>{j}</span>
                  </a>
                </div>
              ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default HeadersList;