import { PENDING_RECORDS_COUNT, TOGGLE_DRAWER } from "./types";
import { getCountByStatus } from "./apihandlers/apiHandler";
import { showAlert } from "../utils/lumuUtils";

export const getRecordsCount = (status) => async dispatch => {
    try {
        const statusCount = await getCountByStatus(status);
        dispatch({
            type: PENDING_RECORDS_COUNT,
            payload: statusCount.count
        })
    } catch (err) {
        showAlert('Fetch Error', JSON.stringify(err), true);
    }
};

export const toggleDrawer = () => dispatch => {
    dispatch({
        type: TOGGLE_DRAWER
    })
    // setTimeout(() => {
    //     dispatch({
    //         type: TOGGLE_DRAWER
    //     })
    // }, 2000)
}