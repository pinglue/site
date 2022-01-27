import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { changeActiveDoc } from "../store/doc";

import Toc from "./toc/toc";
import {Warn, Prereq, Recall, Tip, Note} from "./notice/notice";
import { Tab, TabContainer } from "./tab/tabs";
import HeadersList from "./headersList/headersList";
import { H2, H3 } from "./headers/headers";
import AppLink from './appLink/appLink';

const gridWrapper = {
  display: "grid",
  gridTemplateColumns: "300px 1fr 300px",
};


const SHORTCODES = { Warn, Prereq, Recall, Tip, Note, Tab, TabContainer,a: AppLink, h2: H2, h3: H3 };

export default function ({ docName, title, body, slug, headings }) {

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(changeActiveDoc(slug.split("/")[0]));
  }, []);


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
