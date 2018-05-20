import React from "react";
import { connect } from "react-redux";
import ReactGridLayout from "react-grid-layout";

import "./grid-layout.scss";

class AppContainer extends React.PureComponent{
    render () {
        let layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
          ];
        return (
            <div>{this.props.selectedApp}
               <ReactGridLayout className="layout" isResizable={true} verticalCompact={false} isDraggable={true} layout={layout} cols={12} rowHeight={30} width={1200}>
                    <div key="a">a</div>
                    <div key="b">b</div>
                    <div key="c">c</div>
                </ReactGridLayout>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedApp: state.workspace.selectedApp || "App container"
});

export default connect(mapStateToProps) (AppContainer);