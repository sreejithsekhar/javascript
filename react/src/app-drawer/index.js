import React from "react";
import { connect } from "react-redux";

import "./app-drawer.scss";

import ContextMenu from "./context-menu";
import AppMenuDrawer from "./app-menu-drawer";

import { openDrawer, closeDrawer, appDrawerLoaded, appMenuClicked } from "../actions";

class AppDrawer extends React.PureComponent {
    componentDidMount() {
        this.props.onLoad();
    }

    render () {
        return (
            [
                <ContextMenu key="contextmenu" menu={this.props}/>,
                <AppMenuDrawer key="appdrawer" menu={this.props}/>
            ]
        )
    }
}

const mapStateToProps = (state) => ({
    showMenu: state.workspace.showMenu || false,
    apps: state.workspace.apps || []
});

const mapDispatchToProps = (dispatch) => ({
    onLoad: () => dispatch(appDrawerLoaded()),
    onShow: () => dispatch(openDrawer()),
    onHide: () => dispatch(closeDrawer()),
    onAppClick: (app) => dispatch(appMenuClicked(app))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AppDrawer);