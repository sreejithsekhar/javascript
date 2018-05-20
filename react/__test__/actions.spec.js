import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import * as actions from "../src/actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
    it("should open app drawer", () => {
        const expectedAction = {
            type: "OPEN_DRAWER"
        }
        expect(actions.openDrawer()).toEqual(expectedAction);
    });

    describe("async", () => {
        it("should load workspace settings", () => {
            fetchMock.getOnce("/data/workspace.json", {body: {
                apps: ["app1", "app2", "app3"],
                layouts: [],
                openedApps: ["app2"]
            }, headers: { 'content-type': 'application/json' }});

            const expectedActions = [
                { type: "WORKSPACE_SETTINGS_REQUESTED" },
                {
                    type: "WORKSPACE_SETTINGS_RECEIVED",
                    apps: ["app1", "app2", "app3"],
                    layout: [],
                    openedApps: ["app2"]
                }
            ];

            const store = mockStore();
            return store.dispatch(actions.loadWorkspaceSettings()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })
    });
});