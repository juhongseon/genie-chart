import React, {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchHomeList} from "../actions/musicActions";
import {NavLink} from "react-router-dom";

export default function Home_list() {
    const year = useSelector(state=>state.calendar.year)
    const month = useSelector(state=>state.calendar.month)
    const date = useSelector(state=>state.calendar.date)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchHomeList(year+month+date))
    },[year,month,date])

    const musics = useSelector(state=>state.musics.musics)

    const html = musics.map(m=>
        <Fragment>
            <tr>
                <td rowSpan={'2'}><b>{m.rank}</b></td>
                <td rowSpan={'2'}><img src={m.imgsrc}/></td>
                <td colSpan={'2'}><NavLink to={'/detail/'+m.songid}>{m.title}</NavLink></td>
            </tr>
            <tr>
                <td>{m.artist}</td>
                <td>{m.album}</td>
            </tr>
        </Fragment>
    )

    return (
        <div className={'container'}>
            <table className={'table'}>
                <tbody>
                {html}
                </tbody>
            </table>
        </div>
    )
}