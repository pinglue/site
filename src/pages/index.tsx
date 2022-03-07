import * as React from "react"

// markup
const IndexPage = () => {
	return (
		<main className="landing-page">
			<header className="container">
				<div className="text-center my-1">
					<img src='/img/banner-s.png' alt="pg banner" style={{ width: 'auto' }} />
				</div>
			</header>
			<div className="container my-3 my-md-5 text-center">
				<h1 className="mb-2">A simple and straigforward plugin architecture</h1>
				<p style={{ color: "#6e6e6e" }}>Pinglue is an easy-to-learn framework which allow developers to build complex apps from small and managable plugins. The goal is practicality and simplicity</p>
			</div>
			<div className="container">
				<div className="row align-items-stretch">
					<div className="col-12 col-md-6 mb-2 mb-md-0">
						<div className="s-card-expanded shadow" style={{ border: 'solid 1px #f9f9f9' }}>
							<h3 className="s-card-expanded__header">Pinglue</h3>
							<div className="s-card-expanded__body">
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</div>
							<a className="s-card-expanded__footer text-center">
								Read document
							</a>
						</div>
					</div>
					<div className="col-12 col-md-6 mb-2 mb-md-0">
						<div className="s-card-expanded shadow" style={{ border: 'solid 1px #f9f9f9' }}>
							<h3 className="s-card-expanded__header">Pgweb</h3>
							<div className="s-card-expanded__body">
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</p>
							</div>
							<a className="s-card-expanded__footer text-center">
								Read document
							</a>
						</div>
					</div>
				</div>
			</div>
			<div style={{ marginTop: '-100px', paddingTop: '160px', background: '#1f2937', paddingBottom: '80px', color: '#9ca3af' }}>
				<div className="container text-center">
					<p>
						Use it with any framework: Backend NodeJs, Frontend React, Angular, etc.
					</p>
					<div className="mt-4 row justify-content-center">
						<div className="col-3 col-md-2">
							<img src="/img/icon.png" alt="ICON-TEST" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
						</div>
						<div className="col-3 col-md-2">
							<img src="/img/icon.png" alt="ICON-TEST" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
						</div>
						<div className="col-3 col-md-2">
							<img src="/img/icon.png" alt="ICON-TEST" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
						</div>
						<div className="col-3 col-md-2">
							<img src="/img/icon.png" alt="ICON-TEST" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
						</div>
					</div>
				</div>
			</div>

			<div className="container my-5">
				<div className="text-center mb-3">
					<h4 className="mb-hq" style={{ color: 'var(--color-blue)' }}>WHY PINGLUE?</h4>
					<h2>The benefits you get from a system like this:</h2>
				</div>

				<div className="row align-items-stretch">
					<div className="col-6 mb-2">
						<div className="s-card-expanded" style={{ background: 'var(--color-blue-light)' }}>
							<div className="s-card-expanded__body">
								1. Divide your big projects into small and managable packages - no more big monolithic codebases (managability)
							</div>
						</div>
					</div>
					<div className="col-6 mb-2">
						<div className="s-card-expanded" style={{ background: 'var(--color-blue-light)' }}>
							<div className="s-card-expanded__body">
								2. Adding feature to the app is done by just installing plugins - like an `npm install` command - no need for import classes and modifying the codebase - close your codebase early in the dev cycle. (better quality assurance)
							</div>
						</div>
					</div>
					<div className="col-6 mb-2">
						<div className="s-card-expanded" style={{ background: 'var(--color-blue-light)' }}>
							<div className="s-card-expanded__body">
								3. The has zero body size, it is mostly made of a mesh of plugins based on a simple architecture. Most of thee plugin are reusable in other projest as well. (maximum reusability)
							</div>
						</div>
					</div>
					<div className="col-6 mb-2">
						<div className="s-card-expanded" style={{ background: 'var(--color-blue-light)' }}>
							<div className="s-card-expanded__body">
								4. Join a community of plugin developers, enjoy ready-to-use plugins for your common app purposes (community)
							</div>
						</div>
					</div>
				</div>
			</div>

			<div style={{ background: 'whitesmoke', padding: '50px 0' }}>
				<div className="container">
					<div className="d-md-flex align-items-center justify-content-between">
						<div className="me-3">
							<h3>
								It is designed with maximum developer firendliness in mind! Learn the fundamentals in a few hours<br />
								Get started with the documentaitions:
							</h3>
						</div>
						<div>
							<button className="s-btn mt-2 mt-md-0" style={{ whiteSpace: 'pre' }}>Get started</button>
						</div>
					</div>
				</div>
			</div>

			<footer className="ss-doc-footer text-center py-h">
				© 2022 pinglue
			</footer>

		</main>
	)
}

export default IndexPage

{/* 
<title>Home Page</title>
Nutral and Unopiniaonated: 
Build any type of app or website
*/}

