import { SET_ROUTES, SET_CURRENT_ROUTE } from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case SET_ROUTES:
      return { ...state, allRoutes: action.payload };
    case SET_CURRENT_ROUTE:
      return { ...state, currentRoute: action.route };
    default:
      return state;
  }
}
