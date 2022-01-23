import React, { Component } from "react";
import { Notice, NoticeMessage, NoticeType } from "./notice";


type NoticeItemTemp = {
	id: string;
	type: NoticeType;
	message?: NoticeMessage;
	duration: number;
	element?: any;
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
				{/* <div>
					<button onClick={() => {
						this.addItem({
							type: NoticeType.success,
							duration: 50000,
							id: getRandomStrings(),
							element: (<><div>This is success sample<br /> Another line</div></>)
						})
					}}
					>Add Success Notice</button>
				</div>
				<div>
					<button onClick={() => {
						this.addItem({
							type: NoticeType.warning,
							duration: 30000,
							id: getRandomStrings()
						})
					}}>Add Warning Notice</button>
				</div>
				<div>
					<button
						onClick={() => {
							this.addItem({
								type: NoticeType.error,
								duration: 5000,
								id: getRandomStrings()
							})
						}}>Add Error Notice</button>
				</div>
				<div className='ss-notice-box-wrapper'>
					{
						this.state.items.map((item) => {
							return (
								<Notice
									key={item.id}
									message={item.message}
									type={item.type}
									duration={item.duration}
									onRemove={() => { this.removeItem(item.id) }}
								>
									{item.element}
								</Notice>
							);
						})
					}
				</div> */}
			</>
		);

	}
}

function getRandomStrings() {
	const _charts = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
	let res = '';
	for (let i = 0; i < 5; i++) {
		res = res + Math.floor(Math.random() * _charts.length);
	}
	return res;
}