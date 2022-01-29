import * as React from "react"
import { Link } from "gatsby"
import { Header } from "../components/header/header"
import { DocTitle } from "../components/doc-title/doc-title"

// styles
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}

// markup
const NotFoundPage = () => {
    return (
        <>
            <div style={{maxWidth: '1600px', margin: 'auto'}}>
                <div className="py-h py-md-1 px-2">
                    <div className="d-flex justify-content-between">
                        <DocTitle />
                        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="d-none d-md-block ms-1 octicon octicon-mark-github v-align-middle">
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </div>
                </div>
                <main className='px-2 pt-4'>
                    <title>Not found</title>
                    <h1 style={headingStyles}>Page not found</h1>
                    <p style={paragraphStyles}>
                        Sorry{" "}
                        <span role="img" aria-label="Pensive emoji">
                            😔
                        </span>{" "}
                        we don't have any page in this address. 
                        <br />
                        Please try another address or: 
                        <br />                        
                        <br />
                        <Link to="/">Go home</Link>.
                    </p>
                </main>
            </div>
        </>

    )
}

export default NotFoundPage
