
import React, { CSSProperties, useEffect, useState } from "react";
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

// TODO: should be a shared const with scss
const MOBILE_THRESHOL = 768;
const DEBOUNCE_RATE = 300;

export default function() {

    const [showLeftSidebar, setShowLeftSidebar] = useState(false);

    useEffect(() => {

        let timer: any;
        const windowResizeHandler = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {               
                if(window.innerWidth <= MOBILE_THRESHOL)                   
                    setShowLeftSidebar(false);
            }, DEBOUNCE_RATE);
        }
        window.addEventListener('resize', windowResizeHandler);
        
        return ()=>window.removeEventListener('resize', windowResizeHandler);

    }, []);

    return (
        <>
        <div style={style.header}>
            <button className="ss-toggle-left-sidebar" onClick={()=>setShowLeftSidebar(!showLeftSidebar)}>
                Togglee
            </button>
        </div>
        <div style={style.gridWrapper} className={`ss-doc-wrapper ${showLeftSidebar?"show-left-sidebar":""}`}>
            <div style={style.overlay} className="ss-doc-wrapper__overlay" onClick={() => setShowLeftSidebar(false)}></div>
            <div style={style.leftSideBar} className="ss-doc-wrapper__left-sidebar">
                <p>Side bar</p>
            </div>
            <div style={style.body} className="ss-doc-wrapper__body">Body</div>
            <div style={style.rightSidebar} className="ss-doc-wrapper__right-sidebar">Right sidebar</div>
        </div>
        </>
    )

}