import React, { PropsWithChildren } from "react";
import './notice.scss';
import classNames from 'classnames';
import { useEffect } from "react";

export enum NoticeType {
	success,
	error,
	warning,
}

export enum NoticeMessage {
	ERROR,
}

type Props = PropsWithChildren<{ type?: NoticeType, message: NoticeMessage, duration: number, onRemove: () => void}>

export function Notice(props: Props) {

	let icon: string;;
	switch (props.type) {
		case NoticeType.success: icon = 'bi-check-circle'; break;
		case NoticeType.warning: icon = 'bi-exclamenion-circle'; break;
		case NoticeType.error: icon = 'bi-x-circle'; break;
	}

	useEffect(() => {
		setTimeout(() => {
			console.log('onRemove!')
			props.onRemove();
		}, props.duration)
	},[]);

	return (
		<div
			className={classNames('ss-notice-box', { [`ss-notice-box__${describeNoticeType(props.type)}`]: props.type })}
			onClick={() => {props.onRemove(); }}
		>
			<div className="d-flex">
				<i className={classNames('ss-notice-box__icon', icon)}></i>
				<div style={{ alignSelf: 'center' }}>{describeNoticeMessage(props.message, { case: 'titlecase' })}</div>
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
		default:
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
		default:
	}
	if (option?.case === 'titlecase') {
		s = toTitleCase(s);
	}
	return s;
}

function toTitleCase(s: string) {
	return s[0].toUpperCase() + s.slice(1);
}