const apps = ["app1", "app2", "app3", "app4", "app5"];

export const openDrawer = () => ({
    type: "OPEN_DRAWER"
});

export const closeDrawer = () => ({
    type: "CLOSE_DRAWER"
});

export const appDrawerLoaded = () => ({
    type: "APP_DRAWER_LOADED",
    apps: apps
});

export const appMenuClicked = (app) => ({
    type: "APP_MENU_CLICKED",
    selectedApp: app
});