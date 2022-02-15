import React from "react";
import classNames from "classnames";
import { CliCommandData, CliDocItem, commandName } from "./cli-doc-item";

interface Props extends CliCommandData {
    version?: string;
    commands?: CliCommandData[];
}

export default function CliDocBody(props: Props) {

    return (
        <>
            <h1>Commands (pinglue CLI)</h1>
            <div className="mb-5">
                <div className="mb-1h">
                    <CliDocItem
                        command={props.command}
                        description={props.description}
                    ></CliDocItem>
                </div>

                <table className="cli-table">
                    <thead>
                        <tr>
                            <th scope="col">Command</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.commands.map(item => (
                                <tr>
                                    <td>{commandName(item.command)}</td>
                                    <td data-label="Description">{item.shortDescription || item.description}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>

            {
                props.commands.map((item, i) => (
                    <div
                        key={`${commandName(item.command)}-${i}`}
                        className={classNames({ 'mb-5': (props.commands.length - 1 > i) })}
                    >
                        <CliDocItem {...item}></CliDocItem>
                    </div>
                ))
            }
        </>
    );
}