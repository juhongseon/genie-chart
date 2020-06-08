import {combineReducers} from "redux";
import musicReducer from './musicReducer'
import calendarReducer from "./calendarReducer";

export default combineReducers({
    musics: musicReducer,
    calendar: calendarReducer
})