import React from "react";
import Markdown from 'markdown-to-jsx';

const Notice = ({ children, type }: { children: any; type?: string }) => {
  return (
    <div style={{ border: "2px solid dodgerblue" }}>
      <p>{type}</p>
      <Markdown>{children}</Markdown>
    </div>
  );
};

export default Notice;
