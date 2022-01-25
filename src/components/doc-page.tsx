import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Toc from "./toc/toc";
import {Warn, Prereq, Recall, Tip, Note} from "./notice/notice";
import { Tab, Tabs } from "./tab/tabs";
import HeadersList from "./headersList/headersList";
import { H2, H3 } from "./headers/headers";

const gridWrapper = {
  display: "grid",
  gridTemplateColumns: "300px 1fr 300px",
};

const SHORTCODES = { Warn, Prereq, Recall, Tip, Note, Tab, Tabs, h2: H2, h3: H3 };

export default function ({ docName, title, body, slug, headings }) {
  

  return (
    <div style={gridWrapper}>
      <Toc docName={docName} slug={slug} />
      <article>
        <h1>{title}</h1>
        <div>
          <MDXProvider components={SHORTCODES}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
      </article>
      <HeadersList headings={headings} />
    </div>
  );
}
