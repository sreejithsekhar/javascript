import { SET_ROUTES, SET_CURRENT_ROUTE } from "./actionTypes";

export const setRoutes = routes => ({
  type: SET_ROUTES,
  payload: routes
});

export const setCurrentRoute = route => ({
  type: SET_CURRENT_ROUTE,
  route
});
