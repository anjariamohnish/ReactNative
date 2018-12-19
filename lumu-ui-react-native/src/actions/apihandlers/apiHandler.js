import { composeValidateResponseObject } from "./apiUtils";
import { APIURL } from "../../constants";


export async function getCountByStatus(status) {
    const response = await fetch(`${APIURL}api/records/countbystatus/${status.toUpperCase()}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return composeValidateResponseObject(response);
}