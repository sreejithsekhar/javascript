import React from "react";

import "./app-drawer.scss";

import ContextMenu from "./context-menu";
import AppMenuDrawer from "./app-menu-drawer";

const AppDrawer = () => (
    [
        <ContextMenu key="contextmenu" />,
        <AppMenuDrawer key="appdrawer" />
    ]
);

export default AppDrawer;