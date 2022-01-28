import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { changeActiveDoc } from "../store/doc";

import DocToc from "./toc/doc-toc";
import { Warn, Prereq, Recall, Tip, Note } from "./notice/notice";
import { Tab, TabContainer } from "./tab/tabs";
import HeadersList from "./headersList/headersList";
import { H2, H3 } from "./headers/headers";
import AppLink from './appLink/appLink';
import { Helmet } from "react-helmet";
import { Header } from "./header/header";
import { DocTitle } from "./doc-title/doc-title";
import classNames from "classnames";

const gridWrapper = {
	display: "grid",
	gridTemplateColumns: "300px 1fr 300px",
};


const SHORTCODES = { Warn, Prereq, Recall, Tip, Note, Tab, TabContainer, a: AppLink, h2: H2, h3: H3 };

export default function ({ docName, title, body, slug, headings }) {
	console.log(headings);

	const dispatch = useDispatch();

	const [showLeftSidebar, setShowLeftSidebar] = useState(false);

	useLayoutEffect(() => {
		dispatch(changeActiveDoc(slug.split("/")[0]));
	}, []);

	let timer: any;
	const threasholdToChangeLayout = 768;

	const windowResizeHandler = () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			if (window.innerWidth >= threasholdToChangeLayout && showLeftSidebar) {
				setShowLeftSidebar(false);
			}
		}, 300);
	}

	useEffect(() => {
		window.addEventListener('resize', windowResizeHandler, true);
		return window.removeEventListener('resize', windowResizeHandler, true);
	});



	return (
		<>
			<Helmet>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Helmet>
			<div className={classNames('d-md-flex ss-doc-wrapper', { 'show-left-sidebar': showLeftSidebar })}>
				<div className="ss-doc-wrapper__overlay" onClick={() => setShowLeftSidebar(false)}></div>
				<div className="ss-doc-wrapper__left-sidebar">
					<div className="ss-doc-wrapper__title-area pt-h pt-md-1 px-2">
						<div className="d-flex justify-content-between align-items-center">
							<DocTitle />
							<div className='ms-1 d-md-none'>
								<button className="btn s-icon-btn" style={{ paddingRight: 0 }} onClick={() => { setShowLeftSidebar(false); }}>
									<i className='bi-x'></i>
								</button>
							</div>
						</div>
					</div>
					<DocToc docName={docName} slug={slug} />

				</div>

				<div style={{ flex: '1 1 auto' }}>
					<div className="ss-doc-wrapper__header py-h py-md-1 px-2">
						<Header onClickMenu={() => { setShowLeftSidebar(true) }} />
					</div>

					<div className="d-lg-flex align-items-start ss-doc-wrapper__main">
						<div className="ss-doc-wrapper__body p-2">
							<article className="s-content">
                                <h1>{title}</h1>
								<MDXProvider components={SHORTCODES}>
									<MDXRenderer>{body}</MDXRenderer>
								</MDXProvider>
							</article>
						</div>
						<div className="ss-doc-wrapper__right-sidebar p-2">
							<h6 className="mb-1">In this article</h6>
							<HeadersList headings={headings} />
						</div>
					</div>
				</div>
			</div>
			<div className="py-hq px-2 text-center ss-doc-footer">
				© 2022 pinglue
			</div>
		</>
	);
}