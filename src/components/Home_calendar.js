import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setDate, setMonth} from "../actions/calendarActions";

export default function Home_calendar() {
    const year = useSelector(state=>state.calendar.year)
    const month = useSelector(state=>state.calendar.month)
    const date = useSelector(state=>state.calendar.date)

    const curr = new Date(year,month,date)
    let yesterday = new Date()
    yesterday.setDate(curr.getDate()-1)
    let tomorrow = new Date()
    tomorrow.setDate(curr.getDate()+1)

    const dispatch = useDispatch()

    const toYesterday = ()=>{
        const mm = yesterday.toISOString().substring(5,7)
        const dd = yesterday.toISOString().substring(8,10)
        dispatch(setMonth(mm))
        dispatch(setDate(dd))
    }

    const toTomorrow = ()=>{
        const mm = tomorrow.toISOString().substring(5,7)
        const dd = tomorrow.toISOString().substring(8,10)
        dispatch(setMonth(mm))
        dispatch(setDate(dd))
    }
    
    return (
        <h1 className={'text-center'} style={{"margin":"50px auto"}}>
            <span style={{'cursor':'pointer'}} onClick={()=>{toYesterday()}}>{'<'}&nbsp;&nbsp;&nbsp;&nbsp;</span>
            {year}년 {month}월 {date}일
            <span style={{'cursor':'pointer'}} onClick={()=>{toTomorrow()}}>&nbsp;&nbsp;&nbsp;&nbsp;{'>'}</span>
        </h1>
    )
}