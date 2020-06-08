import {SET_DATE, SET_MONTH} from "../actions/types";

const initialState = {
    year: 2020,
    month: 6,
    date: 8
}

export default function (state=initialState,action) {
    switch (action.type) {
        case SET_MONTH:
            return {
                ...state,
                month: action.payload
            }
        case SET_DATE:
            return {
                ...state,
                date: action.payload
            }
        default: return state
    }
}