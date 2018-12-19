import { LOGIN_USER, LOGOUT_USER } from "./types";

export const loginUser = payload => dispatch => {
    dispatch({
        type: LOGIN_USER,
        payload
    })
};

export const logoutUser = () => dispatch => {
    dispatch({
        type: LOGOUT_USER
    })
};