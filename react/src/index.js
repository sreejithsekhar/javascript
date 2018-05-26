import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import {store} from "./store";

import Workspace from "./workspace";

render (
    <Provider store={store}>
        <Workspace/>
    </Provider>,
    document.getElementById("root")
);