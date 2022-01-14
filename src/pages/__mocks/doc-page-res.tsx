
import React, { CSSProperties, useState } from "react";
import './project.scss';

// feel free to add more styles

const style: { [k: string]: CSSProperties } = {
    gridWrapper: {
        display: "grid",
        position: 'relative',
        // gridTemplateColumns: "300px 1fr 200px", <-- defined in project.scss using media query
        color: "white"
    },
    leftSideBar: {
        height: "100vh",
        backgroundColor: "purple",
        zIndex: 2,
        // defined more style in project.scss using media query
    },
    body: {
        height: "100vh",
        backgroundColor: "blue"
    },
    rightSidebar: {
        height: "100vh",
        backgroundColor: "green"
        //defined more style in project.scss using media query
    },
    header: {
        backgroundColor: "black",
        height: "50px"
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

    return (
        <>
        <div style={style.header}>
            <button className="ss-toggle-left-sidebar" onClick={()=>setShowLeftSidebar(!showLeftSidebar)}>
                Toggle
            </button>
        </div>
        <div style={style.gridWrapper} className={`ss-grid-wrapper ${showLeftSidebar?"show-left-sidebar":""}`}>
            <div style={style.overlay} className="ss-overlay" onClick={() => setShowLeftSidebar(false)}></div>
            <div style={style.leftSideBar} className="ss-left-sidebar">
                <p>Side bar</p>
            </div>
            <div style={style.body}>Body</div>
            <div style={style.rightSidebar} className="ss-right-sidebar">Right sidebar</div>
        </div>
        </>
    )

}