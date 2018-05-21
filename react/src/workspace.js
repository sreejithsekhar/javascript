import React from "react";
import { connect } from "react-redux";

import AppDrawer from "./app-drawer";
import AppContainer from "./app-container";

import { loadWorkspaceSettings } from "./actions";

class Workspace extends React.PureComponent {
    componentDidMount() {
        this.props.onWorkspaceLoad();
    }
    render() {
        return (
            [ 
                <AppDrawer key = "appdrawer" / > , 
                <AppContainer key = "appcontainer" / >
            ]
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    onWorkspaceLoad : () => dispatch(loadWorkspaceSettings())
});

export default connect(null, mapDispatchToProps) (Workspace);

