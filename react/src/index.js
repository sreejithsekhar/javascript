import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

import Workspace from "./workspace.component";

const store = createStore(rootReducer);

render (
    <Provider store={store}>
        <Workspace/>
    </Provider>,
    document.getElementById("root")
);
