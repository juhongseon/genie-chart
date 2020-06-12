import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addReply} from "../actions/musicActions";

export default function ReplyInsert() {
    const [nickname,setNickname] = useState('')
    const [password,setPassword] = useState('')
    const [content,setContent] = useState('')

    const dispatch = useDispatch()
    const songid = useSelector(state=>state.musics.songid)

    return (
        <React.Fragment>
            <table className={'table'}>
                <tbody>
                <tr>
                    <td width={'35%'}>
                        &nbsp;&nbsp;&nbsp;닉네임 : <input value={nickname} onChange={(e)=>{setNickname(e.target.value)}} type={'text'}/><br/><br/>
                        비밀번호 : <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type={'password'}/>
                    </td>
                    <td>
                        <textarea value={content} onChange={(e)=>{setContent(e.target.value)}} rows={'3'} cols={'55'} style={{"resize":"none"}}></textarea>
                        <input onClick={()=>{
                            if(nickname.length*password.length*content.length!=0){
                                dispatch(addReply(songid,nickname,password,content))
                                setNickname('');setPassword('');setContent('')
                            } else alert('닉네임, 비밀번호, 내용은 필수 입력 사항입니다.')
                        }} style={{"position":"relative","left":"5px","bottom":"29px","width":"45px","height":"66px"}} type={'button'} value={'등록'}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

