import React from "react";
import { connect } from "react-redux";

class AppContainer extends React.PureComponent{
    render () {
        return (
            <div>{this.props.selectedApp}</div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedApp: state.workspace.selectedApp || "App container"
});

export default connect(mapStateToProps) (AppContainer);