import classNames from "classnames";
import React from "react";
import { cmdMock } from "./cmd";
import DocPageRes from "./doc-page-res";

type Props = {
	version?: string;
	description?: string;
	commands?: {
		command: string
		description: string;
		options?: {
			flags: string;
			description: string;
		}[]
		examples?: {
			description: string;
			command: string;
		}[]
		action?: string;
	}[]
}

export default function (data: Props) {
	data = cmdMock;

	const commandName = (s: string) => {
		return s.replace(/\s*\[.*?\]/, '');
	}

	const headings = data.commands.map(item => { return {
		depth: 2,
		value: commandName(item.command)
	}});

	return (
		<DocPageRes headings={headings}>
			<h1>Commands (pinglue CLI)</h1>
			<h2>API commands</h2>
			{
				data.commands.map((item, i) => (
					<div
						key={`${commandName(item.command)}-${i}`}
						className={classNames({ 'mb-3': (data.commands.length - 1 > i) })}
					>
						<h3 id={commandName(item.command)}>
							<b>
								<code 
								className="p-h font-bold"
								style={{background: '#fbf2e9'}}
								>{commandName(item.command)}</code>
							</b>
						</h3>
						<h4>Usage</h4>
						<pre className="shell">
							<code>
								npx pg {item.command}
							</code>
						</pre>
						<p>{item.description}</p>

						<table className="table">
							<thead>
								<tr>
									<th scope="col">Flags</th>
									<th scope="col">Description</th>
								</tr>
							</thead>
							<tbody>
								{
									item.options.map(option => (
										<tr>
											<td>{option.flags}</td>
											<td>{option.description}</td>
										</tr>
									))
								}
							</tbody>
						</table>
						{
							item.examples ? <>
								<h4>Examples</h4>
								{
									item.examples.map((ex, i) => (
										<div
											key={`${commandName(item.command)}-ex-${i}`}
											className={classNames({ 'mb-3': (item.examples.length - 1 > i) })}
										>
											<p>{ex.description}</p>
											<pre>
												<code>
													npx pg {ex.command}
												</code>
											</pre>
										</div>
									))
								}</> : null
						}

					</div>
				))
			}
		</DocPageRes>
	);
}