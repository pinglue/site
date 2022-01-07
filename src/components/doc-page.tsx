
import * as React from "react";
import { MDXRenderer } from 'gatsby-plugin-mdx';


import Toc from "./toc";

const gridWrapper = {
    display: "grid",
    gridTemplateColumns: "200px 1fr"
}

export default function({docName, title, body}) {

    return(
        <div style={gridWrapper}>
            <Toc docName={docName} />
            <article>
                <h1>{title}</h1>
                <div>
                    <MDXRenderer>
                        {body}
                    </MDXRenderer>
                </div>
            </article>

        </div>
    )

}