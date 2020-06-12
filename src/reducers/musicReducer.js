import {FETCH_DETAIL_LIST, FETCH_REPLY_LIST, FETCH_SEARCH_LIST, FETCH_TOP200, SET_SONGID} from "../actions/types";

const initialState = {
    musics: [],
    details: [],
    searchs: [],
    songid: '',
    replys:[]
}

export default function (state=initialState,action) {
    switch (action.type) {
        case FETCH_TOP200:
            return {
                ...state,
                musics: action.payload
            }
        case FETCH_DETAIL_LIST:
            return {
                ...state,
                details: action.payload
            }
        case FETCH_SEARCH_LIST:
            return {
                ...state,
                searchs: action.payload
            }
        case SET_SONGID:
            return {
                ...state,
                songid: action.payload
            }
        case FETCH_REPLY_LIST:
            return {
                ...state,
                replys: action.payload
            }
        default:
            return state
    }
}