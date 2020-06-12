import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchSearchList} from "../actions/musicActions";
import {NavLink} from "react-router-dom";

export default function Search() {
    const [keyword,setKeyword] = useState('')
    const [where,setWhere] = useState('title')
    const [exactly,setExactly] = useState(0)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchSearchList(where,keyword,exactly))
    },[where,keyword,exactly])

    const data = useSelector(state=>state.musics.searchs)
    const html = data.map(m=>
        <React.Fragment>
            <tr>
                <td rowSpan={'2'}></td>
                <td rowSpan={'2'}><img src={m.imgsrc}/></td>
                <td colSpan={'2'}><NavLink to={'/detail/'+m.songid}>{m.title}</NavLink></td>
            </tr>
            <tr>
                <td>{m.artist}</td>
                <td>{m.album}</td>
            </tr>
        </React.Fragment>
    )

    return (
        <div className={'container'}>
            검색 : <select value={where} onChange={(e)=>{setWhere(e.target.value)}}>
                    <option value={'title'}>제목</option>
                    <option value={'artist'}>가수</option>
                    <option value={'album'}>앨범</option>
                </select>
            &nbsp;<input onChange={(e)=>{setKeyword(e.target.value)}} value={keyword} size={30}/>&nbsp;&nbsp;
            <input type={'checkbox'} checked={exactly==1 ? true : false} onClick={()=>{if(exactly==0) setExactly(1); else setExactly(0)}}/> 정확히 일치
            <table className={'table'}>
                <tbody>
                {html}
                </tbody>
            </table>
        </div>
    )
}