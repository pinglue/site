import React, { useEffect } from "react";

type Props = {
	onClickMenu: () => void;
}

export function Header(props: Props) {
	let path = window.location.pathname.replace(/^\/|\/$/g, '').split('/');
	path = path.slice(0, path.length - 1);

	function getExactPath(index: number) {
		return `/${path.slice(0, index + 1).join('/')}`;
	}

	useEffect(() => { }, [])

	return (
		<div className="d-flex justify-content-between align-items-center">

			<div>
				{
					path.map((item, index) => {
						return (
							<>
								<a key={index} href={getExactPath(index)}>{item}</a>
								{
									index < path.length - 1 ? <i className="px-h bi-chevron-right" /> : null
								}
							</>
						);
					})
				}
				<a className="ms-1h px-h py-q" style={{fontSize: '13px'}}>
					<span className="d-none d-md-inline me-q">Edit this page</span>
					<i className="bi-pen"></i>
				</a>
			</div>

			<div>
				<button
					style={{ paddingRight: 0 }}
					className="btn s-icon-btn ss-toggle-left-sidebar"
					onClick={props.onClickMenu}
				>
					<i className="bi-list"></i>
				</button>
			</div>
		</div>
	);
}