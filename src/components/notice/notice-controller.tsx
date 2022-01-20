import React, { Component, useEffect } from "react";
import { useState } from "react";
import { Notice, NoticeMessage, NoticeType } from "./notice";


type NoticeItemTemp = {
	id: string;
	type: NoticeType;
	message: NoticeMessage;
	duration: number;
}

export class NoticeController extends Component<{}, { items: NoticeItemTemp[] }> {
	constructor(props: {}) {
		super(props);

		this.state = { items: [] }
	}

	private addItem(item: NoticeItemTemp) {
		this.setState({ items: [...this.state.items, item] });
	}

	private removeItem(id: string) {
		this.setState({ items: this.state.items.filter((item) => item.id !== id) });
	}

	render() {
		return (
			<>
				<button onClick={() => { this.addItem({ type: NoticeType.warning, message: NoticeMessage.ERROR, duration: 3000, id: getRandomStrings() }) }}>Add warning</button>
				<button onClick={() => { this.addItem({ type: NoticeType.error, message: NoticeMessage.ERROR, duration: 5000, id: getRandomStrings() }) }}>Add error</button>
				<div className='ss-notice-box-wrapper'>
					{
						this.state.items.map((item) => {
							return (
								<Notice key={item.id} message={item.message} type={item.type} duration={item.duration} onRemove={() => { this.removeItem(item.id) }} />
							)
						})
					}
				</div>
			</>
		);

	}
}

function getRandomStrings() {
	const _charts = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
	let res = '';
	for(let i=0; i<5; i++) {
		res = res + Math.floor(Math.random() * _charts.length);
	}
	return res;
}