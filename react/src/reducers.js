import { combineReducers } from "redux";

const workspace = (state = {showMenu : false}, action) => {
    switch (action.type) {
        case "OPEN_SOMETHING":
            return {
                ...state,
                showMenu: true
            }
        case "CLOSE_SOMETHING":
        return {
            ...state,
            showMenu: false
        }
        default: return state
    }
}

export default combineReducers({
    workspace
});