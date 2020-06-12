import React, {useEffect, useState} from "react";
import {addReply, fetchReply, removeReply} from "../actions/musicActions";
import {useDispatch, useSelector} from "react-redux";

export default function ReplyList() {
    const [timer,setTimer] = useState(0)
    setTimeout(()=>{
        if(timer==0) setTimer(1)
        else setTimer(timer-1)
    },200)

    const songid = useSelector(state=>state.musics.songid)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(timer==0) dispatch(fetchReply(songid))
    },[songid,timer])

    const [password,setPassword] = useState('')

    const data = useSelector(state=>state.musics.replys)
    const html = data.map(m=>
        <table className={'table'}>
            <tbody>
            <tr>
                <td width={'25%'}>
                    &nbsp;&nbsp;&nbsp;닉네임 : {m.nickname}
                </td>
                <td>
                    {m.content}
                </td>
                <td width={'20%'}>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type={'password'} style={{"width":"80px"}} placeholder={'  password'}/>
                    &nbsp;<input onClick={(e)=>{dispatch(removeReply(e.target.dataset.id,password))}} data-id={m._id} type={'button'} value={'삭제'}/>
                </td>
            </tr>
            </tbody>
        </table>
    )

    return (
        <React.Fragment>
            <h3>실시간 댓글</h3>
            {html}
        </React.Fragment>
    )
}