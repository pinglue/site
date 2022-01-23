import React, { PropsWithChildren } from "react";
import classNames from 'classnames';

export enum NoticeType {
	success,
	error,
	warning,
	prerequisite,
	recall,
	info,
	tip,
	note,
}

export enum NoticeMessage {
	ERROR,
}

type Props = PropsWithChildren<{
	type?: NoticeType,
	message?: NoticeMessage,
	// duration: number,
	// onRemove?: () => void,
}
>

export function Notice(props: Props) {

	let icon: string;;
	switch (props.type) {
		case NoticeType.success: icon = 'bi-check-circle'; break;
		case NoticeType.warning: icon = 'bi-exclamation-triangle'; break;
		case NoticeType.error: icon = 'bi-x-circle'; break;
		case NoticeType.prerequisite: icon = 'bi-check2-square'; break;
		case NoticeType.recall: icon = 'bi-exclamation-circle'; break;
		case NoticeType.tip: icon = 'bi-lightning-charge'; break;
		case NoticeType.note: icon = 'bi-pencil'; break;
	}

	return (
		<div
			className={classNames('ss-notice-box', { [`ss-notice-box__${describeNoticeType(props.type)}`]: props.type >= 0 })}
		>
			<div className="d-flex">
				{
					props.type >=0 ?
						<div className='p-q ss-notice-box__icon-wrapper'>
							<i className={classNames('ss-notice-box__icon', icon)}></i>
						</div>
						: null
				}
				<div className="py-h px-hq" style={{ alignSelf: 'center' }}>
					{
						props.message ? describeNoticeMessage(props.message!, { case: 'titlecase' }) : props.children
					}
				</div>
			</div>
		</div>
	);
}

function describeNoticeType(type: NoticeType, option?: { case?: 'titlecase' }) {
	let s = '';
	switch (type) {
		case NoticeType.success: s = 'success'; break;
		case NoticeType.warning: s = 'warning'; break;
		case NoticeType.error: s = 'error'; break;
		case NoticeType.prerequisite: s = 'prerequisite'; break;
		case NoticeType.recall: s = 'recall'; break;
		case NoticeType.tip: s = 'tip'; break;
		case NoticeType.note: s = 'note'; break;
	}
	if (option?.case === 'titlecase') {
		s = toTitleCase(s);
	}

	return s;
}

function describeNoticeMessage(message: NoticeMessage, option?: { case?: 'titlecase' }) {
	let s = '';
	switch (message) {
		case NoticeMessage.ERROR: s = 'something wrong'; break;
		default: s = message;
	}
	if (option?.case === 'titlecase' && message) {
		s = toTitleCase(s);
	}
	return s;
}

function toTitleCase(s: string) {
	return s[0].toUpperCase() + s.slice(1);
}