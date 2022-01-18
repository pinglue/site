
import React, { CSSProperties, useEffect, useState } from "react";
import { Toc } from '../../components/toc/toc';
import './project.scss';

// feel free to add more styles

const style: { [k: string]: CSSProperties } = {
    gridWrapper: {
        display: "grid",
        position: 'relative',
        width: '100vw',
        // gridTemplateColumns: "300px 1fr 200px", <-- defined in project.scss using media query
        // color: "white"
    },
    leftSideBar: {
        top: 0,
        height: "100vh",
        backgroundColor: "white",
        overflow: 'auto',
        zIndex: 2,
        // padding: '15px',
        boxSizing: 'border-box',
        // defined more style in project.scss using media query
    },

    body: {
        minHeight: "100vh",
        margin: '1rem',
        // backgroundColor: "blue"
    },
    rightSidebar: {
        minHeight: "100vh",
        backgroundColor: "green"
        //defined more style in project.scss using media query
    },
    header: {
        backgroundColor: "white",
        position: 'sticky',
        top: 0,
        // color: "white",
    },
    overlay: {
        zIndex: 1,
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100vw',
		height: '100vh',
		background: 'rgba(0,0,0,0.5)',
        // defined more style in project.scss using media query to toggle visibility
    }
}

export default function() {

    const [showLeftSidebar, setShowLeftSidebar] = useState(false);
    
    let timer: any;
    const threasholdToChangeLayout = 768;

    const windowResizeHandler = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if(window.innerWidth >= threasholdToChangeLayout && showLeftSidebar) {
                setShowLeftSidebar(false);
            }    
        }, 300);
    }

    useEffect(() => {
        window.addEventListener('resize', windowResizeHandler, true);
        return window.removeEventListener('resize', windowResizeHandler, true);
    });

    return (
        <>
        <div style={style.gridWrapper} className={`ss-doc-wrapper ${showLeftSidebar?"show-left-sidebar":""}`}>
            <div style={style.overlay} className="ss-doc-wrapper__overlay" onClick={() => setShowLeftSidebar(false)}>
            </div>
            <div style={style.leftSideBar} className="ss-doc-wrapper__left-sidebar">
                <h1 style={{marginLeft: '1rem'}}>
                    <img 
                        style={{width: '30px', height: '30px'}}
                        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E" 
                        alt="" 
                    />
                    <span style={{verticalAlign: 'middle', marginLeft: '5px'}}>Title</span>
                </h1>
                <Toc docName="pgweb" slug="test" ></Toc>
            </div>
            <div style={style.header} className="ss-doc-wrapper__header">
                <div className="d-flex justify-content-between align-items-center" style={{height: '100%', margin: '0 1rem'}}>
                    <div>
                        <button 
                            style={{paddingRight: '10px'}}
                            className="btn btn-light ss-toggle-left-sidebar" 
                            onClick={()=>setShowLeftSidebar(!showLeftSidebar)}
                        >
                            <i className="bi-list"></i>
                        </button>
                        HEADER
                    </div>
                    <div>
                        <a>
                            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle">
                                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                    </div>                        
                </div>
            </div>

            <div style={style.body} className="ss-doc-wrapper__body">

                test <br/><br/><br/><br/><br/>test <br/><br/><br/><br/><br/>test <br/><br/><br/><br/><br/>test <br/><br/><br/><br/><br/>test <br/><br/><br/><br/><br/>test <br/><br/><br/><br/><br/>test <br/><br/><br/><br/><br/>test <br/><br/><br/><br/><br/>test <br/><br/><br/><br/><br/>test <br/><br/><br/><br/><br/>test <br/><br/><br/><br/><br/>
            </div>
            <div style={style.rightSidebar} className="ss-doc-wrapper__right-sidebar">Right sidebar</div>
        </div>
        </>
    )

}