import React, { PropsWithChildren, useState } from "react";
import classNames from 'classnames';

export enum NoticeTheme {
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
	theme?: NoticeTheme,
	title?: String,
	icon?: String,
	message?: NoticeMessage,
	dismissible?: boolean,
	inline?: boolean,
	onDismissed?: () => void,
}>

export function Notice(props: Props) {

	const message = props.message >= 0 ? _describeNoticeMessage(props.message!, { case: 'titlecase' }) : props.children

    const [shouldShow, setShouldShow] = useState<boolean>(true);

    if (!shouldShow) return null;

	return (
		<div
			className={classNames('p-hq ss-notice-box', { [`ss-notice-box__${_describeNoticeTheme(props.theme)}`]: props.theme >= 0 })}
		>
			<div className="d-flex justify-content-between">
				{
					props.inline ?
						<div className="ss-notice-box__message">
							<i className={classNames('me-h', props.icon)}></i>
							<b className="me-q">{props.title} </b>
							<span>{message}</span>
						</div>
						:
						<div>
							{
								props.title ?
									<h6 className='ss-notice-box__title'>
										<i className={classNames('me-h ss-notice-box__icon', props.icon)}></i>
										<span>{props.title}</span>
									</h6>
									: null
							}
							<div className="ss-notice-box__message">
								{message}
							</div>
						</div>
				}

				{
					props.dismissible ?
						<button
							style={{ margin: '-6px -8px -12px 0' }}
							className="s-icon-btn"
							onClick={()=>setShouldShow(false)}
						>
							<i className="bi-x"></i>
						</button> : null
				}

			</div>
		</div>
	);
}

function _describeNoticeTheme(type: NoticeTheme, option?: { case?: 'titlecase' }) {
	let s = '';
	switch (type) {
		case NoticeTheme.success: s = 'success'; break;
		case NoticeTheme.warning: s = 'warning'; break;
		case NoticeTheme.error: s = 'error'; break;
		case NoticeTheme.prerequisite: s = 'prerequisite'; break;
		case NoticeTheme.recall: s = 'recall'; break;
		case NoticeTheme.tip: s = 'tip'; break;
		case NoticeTheme.note: s = 'note'; break;
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
export const Warn = (props: Props) => Notice({ theme: NoticeTheme.warning, title: 'Warning', icon: 'bi-exclamation-triangle', ...props, });
export const Prereq = (props: Props) => Notice({ theme: NoticeTheme.prerequisite, title: 'Prerequisite', icon: 'bi-check2-square', ...props, });
export const Recall = (props: Props) => Notice({ theme: NoticeTheme.recall, title: 'Recall', icon: 'bi-exclamation-circle', ...props, });
export const Tip = (props: Props) => Notice({ theme: NoticeTheme.tip, title: 'Tip', icon: 'bi-lightning-charge', ...props, });
export const Note = (props: Props) => Notice({ theme: NoticeTheme.note, title: 'Note', icon: 'bi-pencil', ...props, });
