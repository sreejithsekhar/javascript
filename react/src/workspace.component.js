import React from "react";

import AppDrawer from "./app-drawer";
import AppContainer from "./app-container";

const Workspace = () => (
    [
        <AppDrawer key="appdrawer" />,
        <AppContainer key="appcontainer" />
    ]
)

export default Workspace;