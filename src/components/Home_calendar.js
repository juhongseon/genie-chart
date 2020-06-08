import React from "react";
import {useSelector} from "react-redux";

export default function Home_calendar() {
    const year = useSelector(state=>state.calendar.year)
    const month = useSelector(state=>state.calendar.month)
    const date = useSelector(state=>state.calendar.date)
    
    return (
        <h1 className={'text-center'}>{year}년 {month}월 {date}일</h1>
    )
}