import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Toc from "./toc/toc";
import Notice from "./notice/notice";
import { Tab, Tabs } from "./tab/tabs";
import HeadersList from "./headersList/headersList";

const gridWrapper = {
  display: "grid",
  gridTemplateColumns: "300px 1fr 300px",
};

const H2 = ({ children }) => {
  return <h2 id={children}>{children}</h2>;
};

export default function ({ docName, title, body, slug, mdxAST }) {
  const shortcodes = { Notice, Tab, Tabs, h2: H2 };

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
      <HeadersList mdxAST={mdxAST} />
    </div>
  );
}
