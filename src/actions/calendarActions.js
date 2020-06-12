import {SET_MONTH,SET_DATE} from "./types";

export const setMonth = (month)=>dispatch=>{
    dispatch({
        type: SET_MONTH,
        payload: month
    })
}

export const setDate = (date)=>dispatch=>{
    dispatch({
        type: SET_DATE,
        payload: date
    })
}