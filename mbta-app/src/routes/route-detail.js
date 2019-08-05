import React from "react";
import { Route } from "react-router-dom";

import RouteDetail from "../components/RouteDetail";

export default () => (
  <Route path="/route-detail/:routeId" component={RouteDetail} />
);
