import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Toc from "./toc/toc";
import Notice from "./notice/notice";
import { Tab, Tabs } from "./tab/tabs";

const gridWrapper = {
  display: "grid",
  gridTemplateColumns: "300px 1fr",
};

export default function ({ docName, title, body, slug }) {
  const shortcodes = { Notice, Tab, Tabs };
  return (
    <div style={gridWrapper}>
      <Toc docName={docName} slug={slug} />
      <article>
        <h1>{title}</h1>
        <div>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </article>
    </div>
  );
}
