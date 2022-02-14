import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { changeActiveDoc } from "../store/doc";

import DocToc from "./toc/doc-toc";

import HeadersList from "./headersList/headersList";

import { Helmet } from "react-helmet";
import { Header } from "./header/header";
import { DocTitle } from "./doc-title/doc-title";
import classNames from "classnames";

import {SHORTCODES} from "./shortcodes";

import type {DocName} from "../commons";

import type {PageProps} from "../commons";

export default function (props: PageProps) {

    const {docName, title, type, slug, data} = props;

	const dispatch = useDispatch();

	const [showLeftSidebar, setShowLeftSidebar] = useState(false);

	useLayoutEffect(() => {
		dispatch(changeActiveDoc(slug.split("/")[0] as DocName));
	}, []);

	let timer: any;
	const threasholdToChangeLayout = 768;   

    const windowResizeHandler = () => {        
        
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (window.innerWidth >= threasholdToChangeLayout && showLeftSidebar) {

                setShowLeftSidebar(false);
            }
        }, 500);
    }
	

	useEffect(() => {       
		window.addEventListener('resize', windowResizeHandler);
		return () => window.removeEventListener('resize', windowResizeHandler);
	});



	return (
		<>
			<Helmet>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Helmet>
			<div className={classNames('d-md-flex ss-doc-wrapper', { 'show-left-sidebar': showLeftSidebar })}>				
				<nav className="ss-doc-wrapper__left-sidebar">
					<div className="ss-doc-wrapper__title-area pt-h pt-md-1 px-2 d-flex justify-content-between align-items-center">
                        <DocTitle />
                        <section className='ms-1 d-md-none'>
                            <button className="btn s-icon-btn" style={{ paddingRight: 0 }} onClick={() => { setShowLeftSidebar(false); }}>
                                <i className='bi-x'></i>
                            </button>
                        </section>
					</div>
					<DocToc docName={docName} slug={slug} />
				</nav>

				<div style={{ flex: '1 1 auto' }}>
					<header className="ss-doc-wrapper__header py-h py-md-1 px-2">
						<Header onClickMenu={() => { setShowLeftSidebar(true) }} />
					</header>

					<div className="d-lg-flex align-items-start ss-doc-wrapper__main">
						<div className="ss-doc-wrapper__body p-2">
							<article className="s-content">
                                <h1>{title}</h1>
                                {(type==="mdx") && (
                                    <MDXProvider components={SHORTCODES}>
                                        <MDXRenderer>
                                            {data.body}
                                        </MDXRenderer>
								    </MDXProvider>
                                )}								
							</article>
						</div>
						<aside className="ss-doc-wrapper__right-sidebar p-2">
							<h6 className="mb-1">In this article</h6>
							<HeadersList {...props} />
						</aside>
					</div>
				</div>
			</div>
			<div className="py-hq px-2 text-center ss-doc-footer">
				© 2022 pinglue
			</div>
		</>
	);
}