
import React, {useState} from "react";

// feel free to add more styles

const style = {
    gridWrapper: {
        display: "grid",
        gridTemplateColumns: "300px 1fr 200px",
        color: "white"
    },
    leftSideBar: {
        height: "100vh",
        backgroundColor: "purple"
    },
    body: {
        height: "100vh",
        backgroundColor: "blue"
    },
    rightSidebar: {
        height: "100vh",
        backgroundColor: "green"
    },
    header: {
        backgroundColor: "black",
        height: "50px"
    }
}

export default function() {

    const [showLeftSidebar, setShowLeftSidebar] = useState(true);

    return (
        <>
        <div style={style.header}>
            <button onClick={()=>setShowLeftSidebar(!showLeftSidebar)}>
                Toggle
            </button>
        </div>
        <div style={style.gridWrapper} className={showLeftSidebar?"show-left-sidebar":""}>
            <div style={style.leftSideBar}>
                
                <p>Side bar</p>
            </div>
            <div style={style.body}>Body</div>
            <div style={style.rightSidebar}>Right sidebar</div>
        </div>
        </>
    )

}