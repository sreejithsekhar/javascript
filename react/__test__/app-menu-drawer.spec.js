import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AppMenuDrawer from "../src/app-drawer/app-menu-drawer";

Enzyme.configure({ adapter: new Adapter() });

function setup(showMenu) {
    const props = {
        menu: {
            showMenu: showMenu,
            apps: ["app1", "app2", "app3"],
            onAppClick: function (params) {
                return true;
            }
        }       
    }

    const enzymeWrapper = mount(<AppMenuDrawer {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe("components", () => {
    it("should show menu with apps", () => {
        const { enzymeWrapper } = setup(true);
        expect(enzymeWrapper.find("div.app-drawer").length).toBe(1);
        expect(enzymeWrapper.find("div.app-drawer div").length).toBe(4);
    });

    it("should not show menu", () => {
        const { enzymeWrapper } = setup(false);
        expect(enzymeWrapper.find("div.app-drawer").length).toBe(0);
    });
})