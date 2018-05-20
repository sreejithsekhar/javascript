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
        const { selectedApp } = action,
            appIndex = state.openedApps.indexOf(selectedApp),
            apps = (appIndex === -1) ? [...state.openedApps, selectedApp] :
            [...state.openedApps.slice(0, appIndex), 
                ...state.openedApps.slice(appIndex + 1)];
        return {
            ...state,
            selectedApp: action.selectedApp,
            openedApps: apps
        }
        case "READ_APP_LAYOUT":
        return {
            ...state,
            layout: action.layout,
            openedApps: action.openedApps
        }
        default: return state
    }
}

export default combineReducers({
    workspace
});