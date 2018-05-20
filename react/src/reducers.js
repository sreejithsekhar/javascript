import { combineReducers } from "redux";

const workspace = (state = {showMenu : false}, action) => {
    console.log("Action: ", action.type);    
    switch (action.type) {
        case "OPEN_DRAWER":
            return {
                ...state,
                showMenu: true
            }
        case "CLOSE_DRAWER":
        return {
            ...state,
            showMenu: false
        }
        case "APP_DRAWER_LOADED":
        return {
            ...state,
            apps: action.apps
        }
        case "APP_MENU_CLICKED":
        return {
            ...state,
            selectedApp: action.selectedApp
        }
        default: return state
    }
}

export default combineReducers({
    workspace
});