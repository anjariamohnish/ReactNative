import { LOGIN_USER, LOGOUT_USER, PENDING_RECORDS_COUNT, TOGGLE_DRAWER } from "../actions/types";

const INITIAL_STATE = {
    user: null,
    openDrawer: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            }
        case PENDING_RECORDS_COUNT:
            return {
                ...state,
                pendingRecordsCount: action.payload
            }
        case TOGGLE_DRAWER:
            return {
                ...state,
                openDrawer: !state.openDrawer
            }
        default:
            return state
    }
}