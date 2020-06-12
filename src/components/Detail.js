import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDetailList, setSongId} from "../actions/musicActions";
import {NavLink} from "react-router-dom";
import DetailChart from "./DetailChart";
import Reply from "./Reply";

export default function Detail(props) {
    const songid = props.match.params.songid

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchDetailList(songid))
        dispatch(setSongId(songid))
    },[songid])

    const data = useSelector(state=>state.musics.details)

    const detailHtml = data.slice(0,1).map(m=>
        <table className={'table'}>
            <tbody>
            <tr>
                <td rowSpan={'2'}></td>
                <td rowSpan={'2'}><img src={m.imgsrc}/></td>
                <td colSpan={'2'}>{m.title}</td>
            </tr>
            <tr>
                <td>{m.artist}</td>
                <td>{m.album}</td>
            </tr>
            </tbody>
        </table>
    )

    const [minRank,setMinRank] = useState(200)
    const [maxRank,setMaxRank] = useState(1)

    const charData = data.map(m=>{
        let y = Number(m.rank)
        if(y>maxRank) setMaxRank(y)
        if(y<minRank) setMinRank(y)
        let ymd = m.ymd
        let time = ymd.substring(4,6)+'/'+ymd.substring(6)+'/'+ymd.substring(0,4)

        return {
            x: new Date(time),
            y: y
        }
    })

    return(
        <div className={'container'}>
            {detailHtml}
            <h3 style={{"margin-top":"50px"}}>순위 변동</h3>
            <DetailChart data={charData} minRank={minRank} maxRank={maxRank}/>
            <Reply />
        </div>
    )
}