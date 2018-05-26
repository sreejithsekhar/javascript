import { call, put, takeEvery } from "redux-saga/effects";

function loadWorkspaceSettings() {
    return fetch("/data/workspace.json")
        .then(response => response.json())
        .then(json => ({ data: json}))
        .catch(err => ({err}));
};

function* fecthSettings() {
    const { data, err } = yield call(loadWorkspaceSettings);
    if (data) {
        yield put({
            type: "WORKSPACE_SETTINGS_RECEIVED",
            apps: data.apps,
            layout: data.layouts,
            openedApps: data.openedApps
        });
    } else {
        yield put({
            type: "WORKSPACE_SETTINGS_FAILED"
        });
    }
}

export function* loadSettings() {
    yield takeEvery("LOAD_WORKSPACE_SETTINGS", fecthSettings);
}