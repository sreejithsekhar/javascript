const apps = ["app1", "app2", "app3", "app4", "app5"];
const layouts = [];
const openedApps = ["app1", "app2", "app3"];

export const openDrawer = () => ({
    type: "OPEN_DRAWER"
});

export const closeDrawer = () => ({
    type: "CLOSE_DRAWER"
});

export const appMenuClicked = (app) => ({
    type: "APP_MENU_CLICKED",
    selectedApp: app
});

function settingsRequested() {
    return {
        type: "WORKSPACE_SETTINGS_REQUESTED"
    }
}

function settingsReceived(response) {
    return {
        type: "WORKSPACE_SETTINGS_RECEIVED",
        apps: response.apps,
        layout: response.layouts,
        openedApps: response.openedApps
    }
}

function settingsFailed(error) {
    return {
        type: "WORKSPACE_SETTINGS_FAILED"
    }
}

export function loadWorkspaceSettings() {
    return dispatch => {
        dispatch(settingsRequested());
        return fetch("/data/workspace.json")
            .then(response => response.json())
            .then(json => dispatch(settingsReceived(json)))
            .catch(err => dispatch(settingsFailed(err)));
    }
}