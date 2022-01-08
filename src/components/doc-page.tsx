import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Toc from "./toc/toc";

const gridWrapper = {
  display: "grid",
  gridTemplateColumns: "300px 1fr",
};

export default function ({ docName, title, body, slug }) {
  return (
    <div style={gridWrapper}>
      <Toc docName={docName} slug={slug} />
      <article>
        <h1>{title}</h1>
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </article>
    </div>
  );
}
