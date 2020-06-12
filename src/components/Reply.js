import React from "react";
import ReplyInsert from "./ReplyInsert";
import ReplyList from "./ReplyList";

export default function Reply() {
    return (
        <div className={'container'} style={{"margin-top":"50px"}}>
            <h3>댓글 쓰기</h3>
            <ReplyInsert/>
            <ReplyList/>
        </div>
    )
}