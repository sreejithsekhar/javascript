import React from "react";

const renderAppDrawer = (apps, onAppClick) => 
apps.map((app) => <div key={app} onClick={() => onAppClick(app)}>{app}</div>);

const AppMenuDrawer = (props) => {
    const { showMenu, apps, onAppClick } = props.menu;
    return (
        showMenu ? <div className="app-drawer">{renderAppDrawer(apps, onAppClick)}</div> : ""
    );
};

export default AppMenuDrawer;