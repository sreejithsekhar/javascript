import React from "react";
import AppComponent from "./app.component";
import { openSomething, closeSomething } from "./actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    showMenu: state.samples.showMenu || false
});

const mapDispatchToProps = (dispatch) => ({
    onShow: () => dispatch(openSomething()),
    onHide: () => dispatch(closeSomething())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (AppComponent);