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
	message?: NoticeMessage
}
>

const ICON = new Map<NoticeType, string>()
    .set(NoticeType.success, 'bi-check-circle')
    .set(NoticeType.warning, 'bi-exclamation-triangle')
    .set(NoticeType.error, 'bi-x-circle')
    .set(NoticeType.prerequisite, 'bi-check2-square')
    .set(NoticeType.recall, 'bi-exclamation-circle')
    .set(NoticeType.tip, 'bi-lightning-charge')
    .set(NoticeType.note, 'bi-pencil')

export function Notice(props: Props) {

	const icon = ICON.get(props.type);

	return (
		<div
			className={classNames('p-hq ss-notice-box', { [`ss-notice-box__${_describeNoticeType(props.type)}`]: props.type >= 0 })}
		>
			{
				props.type >= 0 ?
					<h6 className='ss-notice-box__title'>
						<i className={classNames('me-h ss-notice-box__icon', icon)}></i>
						<span>{_describeNoticeType(props.type, { case: 'titlecase' })}</span>
					</h6>
					: null
			}
			<div style={{ alignSelf: 'center' }}>
				{
					props.message ? _describeNoticeMessage(props.message!, { case: 'titlecase' }) : props.children
				}
			</div>
		</div>
	);
}

function _describeNoticeType(type: NoticeType, option?: { case?: 'titlecase' }) {
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
		s = _toTitleCase(s);
	}

	return s;
}

function _describeNoticeMessage(message: NoticeMessage, option?: { case?: 'titlecase' }) {
	let s = '';
	switch (message) {
		case NoticeMessage.ERROR: s = 'something wrong'; break;
		default: s = message;
	}
	if (option?.case === 'titlecase' && message) {
		s = _toTitleCase(s);
	}
	return s;
}

function _toTitleCase(s: string) {
	return s[0].toUpperCase() + s.slice(1);
}

// shorcodes
export const Warn = (props: Props) => Notice({...props, type: NoticeType.warning});
export const Prereq = (props: Props) => Notice({...props, type: NoticeType.prerequisite});
export const Recall = (props: Props) => Notice({...props, type: NoticeType.recall});
export const Tip = (props: Props) => Notice({...props, type: NoticeType.tip});
export const Note = (props: Props) => Notice({...props, type: NoticeType.note});
