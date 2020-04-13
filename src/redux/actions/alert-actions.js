import {alertConstants} from "../constants";

 const success = (message) => {
    return {
        type: alertConstants.SUCCESS,
        payload: message
    }
}


const error = (message) => {
    return {
        type: alertConstants.ERROR,
        payload: message
    }
}

 const clear = (message) => {
    return {
        type: alertConstants.CLEAR,
        payload: message
    }
}

export const alertActions = {
     success,
    error,
    clear
}