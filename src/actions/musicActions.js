import axios from 'axios'
import {FETCH_DETAIL_LIST, FETCH_REPLY_LIST, FETCH_SEARCH_LIST, FETCH_TOP200, SET_SONGID} from "./types";

const URL = 'http://localhost:3355/'

export const fetchHomeList = (ymd) => dispatch => {
    axios.get(URL + 'top200', {
        params: {ymd: ymd}
    }).then((res) => {
        dispatch({
            type: FETCH_TOP200,
            payload: res.data
        })
    })
}

export const fetchDetailList = (songid) => dispatch => {
    axios.get(URL + 'detail', {
        params: {songid: songid}
    }).then((res) => {
        dispatch({
            type: FETCH_DETAIL_LIST,
            payload: res.data
        })
    })
}

export const fetchSearchList = (where, keyword, exactly) => dispatch => {
    axios.get(URL + 'search', {
        params: {where: where, keyword: keyword, exactly: exactly}
    }).then((res) => {
        dispatch({
            type: FETCH_SEARCH_LIST,
            payload: res.data
        })
    })
}

export const setSongId = (songid) => dispatch => {
    dispatch({
        type: SET_SONGID,
        payload: songid
    })
}

export const addReply = (songid, nickname, password, content) => dispatch => {
    axios.get(URL + 'addReply', {
        params: {
            songid: songid,
            nickname: nickname,
            password: password,
            content: content
        }
    })
}

export const fetchReply = (songid) => dispatch => {
    axios.get(URL + 'reply', {
        params: {songid: songid}
    }).then((res) => {
        dispatch({
            type: FETCH_REPLY_LIST,
            payload: res.data
        })
    })
}

export const removeReply = (_id, password) => dispatch => {
    axios.get(URL + 'removeReply', {
        params: {
            _id: _id,
            password: password
        }
    })
}