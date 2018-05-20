import React from "react";

const renderMenuButton = (menu) => (
    menu.showMenu ? <button onClick={menu.onHide}>Apply</button> :
    <button onClick={menu.onShow}>Customize</button>
);

const ContextMenu = (props) => (
    <div className="context-menu-container">
        <span className="context-menu-left-container">
            <h1>Application Title</h1>
            {renderMenuButton(props.menu)}
        </span>
        <div><a href="">Another link</a></div>
    </div>
);

export default ContextMenu;