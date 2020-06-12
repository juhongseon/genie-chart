import {SET_DATE, SET_MONTH} from "../actions/types";

const today = new Date()
const year = today.getFullYear()
let month = today.getMonth()+1
let date = today.getDate()

const initialState = {
    year: ''+year,
    month: month<10 ? '0'+month : ''+month,
    date: date<10 ? '0'+date : ''+date
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