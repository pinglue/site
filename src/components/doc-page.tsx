import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { changeActiveDoc } from "../store/doc";

import Toc from "./toc/toc";
import Notice from "./notice/notice";
import { Tab, TabContainer } from "./tab/tabs";
const gridWrapper = {
  display: "grid",
  gridTemplateColumns: "300px 1fr",
};

export default function ({ docName, title, body, slug }) {
  const dispatch = useDispatch();
  const shortcodes = { Notice, Tab, TabContainer };
  useLayoutEffect(() => {
    dispatch(changeActiveDoc(slug.split("/")[0]));
  }, []);
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
