import classNames from "classnames";
import React from "react";

export type CliCommandData = {
	command: string;
	description: string;
	shortDescription?: string;
	options?: {
		flags: string;
		description?: string;
	}[];
	examples?: {
		command: string;
		description?: string;
	}[]
	action?: string;
}

export const commandName = (s: string) => {
	return s.replace(/\s*(\[.*?\])|(<.*?>)\s*/g, '');
}


export function CliDocItem(props: CliCommandData) {
	return (
		<>
			<h2 id={commandName(props.command)}>
				<b>
					<code
						className="p-h font-bold"
						style={{ background: '#fbf2e9' }}
					>{commandName(props.command)}</code>
				</b>
			</h2>
			<h3>Usage</h3>
			<pre className="shell">
				<code>
					pg {props.command}
				</code>
			</pre>
			{props.description ? <p>{props.description}</p> : null}
			{
				props.options?.length > 0 ?
					<table className="ss-cli-table">
						<thead>
							<tr>
								<th scope="col">Flags</th>
								<th scope="col">Description</th>
							</tr>
						</thead>
						<tbody>
							{
								props.options.map(option => (
									<tr>
										<td data-label="Flags">{option.flags}</td>
										<td data-label="Description">{option.description}</td>
									</tr>
								))
							}
						</tbody>
					</table> : null
			}

			{
				props.examples ?
					<>
						<h3>Examples</h3>
						{
							props.examples.map((ex, i) => (
								<div
									key={`${commandName(props.command)}-ex-${i}`}
									className={classNames({ 'mb-1h': (props.examples.length - 1 > i) })}
								>
									<p>{ex.description || ''}</p>
									<pre className="shell">
										<code>
										    pg {ex.command}
										</code>
									</pre>
								</div>
							))
						}
					</> : null
			}
		</>
	);
}