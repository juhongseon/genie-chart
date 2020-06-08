import {FETCH_TOP200} from "../actions/types";

const initialState = {
    musics: []
}

export default function (state=initialState,action) {
    switch (action.type) {
        case FETCH_TOP200:
            return {
                ...state,
                musics: action.payload
            }
        default:
            return state
    }
}