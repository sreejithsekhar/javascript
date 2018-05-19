import React from "react";
import PropTypes from "prop-types";

const renderText = (showMenu) => {
    if (showMenu) {
        return "Hello World";
    } else {
        return "Zero world";
    }
}

const AppComponent = ({ showMenu, onShow, onHide }) => (
    <div>
        {renderText(showMenu)}
        <button onClick={onShow}>Show</button>
        <button onClick={onHide}>Hide</button>        
    </div>
)

AppComponent.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    onShow: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired
}

export default AppComponent;
