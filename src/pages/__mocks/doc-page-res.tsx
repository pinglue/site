
import React, { useEffect, useState } from "react";
import { DocTitle } from "../../components/doc-title/doc-title";
import { Header } from "../../components/header/header";
import { Toc } from '../../components/toc/toc';
import '../../scss/bundle.scss';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';

export default function () {

	const [showLeftSidebar, setShowLeftSidebar] = useState(false);

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
					<div className="ss-doc-wrapper__title-area">
						<DocTitle />
					</div>
					<Toc docName="pgweb" slug="test" ></Toc>
				</div>

				<div>
					<div className="ss-doc-wrapper__header px-2">
						<Header onClickMenu={() => { setShowLeftSidebar(true) }} />
					</div>

					<div className="d-lg-flex ss-doc-wrapper__main">
						<div className="ss-doc-wrapper__body p-2">
							<div className="s-content">
								<h1>What is Lorem Ipsum?</h1>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
								<h2>Why do we use it?</h2>
								<ul>
									<li>It is a long established fact that a reader will be distracted by the readable content</li>
									<li>of a page when looking at its layout. The point</li>
									<li>of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</li>
									<li>to using 'Content here, content here', making it look like readable English.</li>
								</ul>
								<ol>
									<li>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</li>
									<li>'lorem ipsum' will uncover many web sites still in their infancy.</li>
									<li>Various versions have evolved over the years, sometimes by accident</li>
									<li>sometimes on purpose (injected humour and the like).</li>
								</ol>
								<h3>Where does it come from?</h3>
								<pre>
									<code>
										1234567890<br />
										Contrary to popular belief, Lorem Ipsum is not simply random text.<br />
										It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <br />
										Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
									</code>
								</pre>
								<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
								<h2>Where can I get some?</h2>
								<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
							</div>
						</div>
						<div className="ss-doc-wrapper__right-sidebar p-2">
							<h6>In this article</h6>
						</div>
					</div>
				</div>
			</div>
			<div className="py-hq px-2 text-center ss-doc-footer">
				© 2022 pinglue
			</div>
		</>
	)

}