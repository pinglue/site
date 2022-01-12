import React from "react";
import Markdown from "markdown-to-jsx";

export default function ({ children, type }: { children: any; type?: string }) {
  return (
    <div style={{ border: "2px solid dodgerblue" }}>
      <p>{type}</p>
      <Markdown>{children}</Markdown>
    </div>
  );
}
