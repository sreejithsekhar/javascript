import React from "react";
import { Route } from "react-router-dom";

import Home from "../containers/Home";

export default () => <Route exact path="/" component={Home} />;
