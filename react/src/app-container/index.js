import React from "react";
import { connect } from "react-redux";
import ReactGridLayout from "react-grid-layout";

import { getLayout } from "../actions";

import "./grid-layout.scss";
import "./app-container.scss";

class AppContainer extends React.PureComponent{
    renderApps (apps) {
        return apps.map((app) => <div key={app}>{app}</div>);
    }
    render () {
        return (
            <div>
               <ReactGridLayout className="layout"
                    isResizable={true} compactType={"horizontal"} 
                    isDraggable={true} layout={this.props.appLayout} 
                    cols={5} rowHeight={30} width={1200}>
                    {this.renderApps(this.props.openedApps)}
                </ReactGridLayout>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    selectedApp: state.workspace.selectedApp || "App container",
    appLayout: state.workspace.layout || [],
    openedApps: state.workspace.openedApps || []
});

export default connect(mapStateToProps) (AppContainer);