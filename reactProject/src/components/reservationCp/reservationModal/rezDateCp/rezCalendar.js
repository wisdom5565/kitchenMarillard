import styled from 'styled-components';
import {useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import moment from "moment";
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';

const RezCalendar = () =>{

    // 리덕스관련
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reservation);


    const [value, onChange] = useState();
    
    useEffect(()=>{
        if(value === undefined){

            dispatch({
                type: "INSERT_REZDATE",
                data:{
                    rezDate: ''
                }
            })
        }else{
            dispatch({
                type: "INSERT_REZDATE",
                data:{
                    rezDate: moment(value).format("YYYY-MM-DD")
                }
            })
        }
        console.log(value)
    },[value])
    

    if(state.rezPerson === 0){
        return null;
    }else if(state.rezTime !== ''){
        return null;
    }
    return(
        <>
            <p>날짜를 선택해주세요</p>
            <CalendarWrap>
                <MyCalendar 
                    onChange={onChange}
                    value={value}
                    showNeighboringMonth={false}
                    formatDay={(locale, date) => moment(date).format("DD")}
                    />
            </CalendarWrap>
        </>
    );
}
const CalendarWrap = styled.div`
    width: 100%;
    text-align: center;
    padding-left: 21px;
`
const MyCalendar = styled(Calendar)`
    @font-face {
        font-family: 'MonoplexKR-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    border-radius: 15px;
    height: 400px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
    border: 0;


    .react-calendar{
            font-family: 'MonoplexKR-Regular';
   
        }
        abbr[title] {
            text-decoration: none;
        }
        .react-calendar__navigation button{
            color: #F20544;
            border-radius: 15px;
        }
        .react-calendar__tile--now {
            background: #0BBFBF;
            color: white;
            border-radius: 50%;
        }
        .react-calendar__tile--now:enabled:hover,
        .react-calendar__tile--now:enabled:focus {
            background: #F2E963;
            color: white;
            border-radius: 50%;
        }
        .react-calendar__navigation__label > span {
            font-family: 'MonoplexKR-Regular';
            font-size:  1.1em;
            font-weight: 700;
            color: #F20544;
        }
        .react-calendar__month-view__weekdays {
            font-size: 0.9rem;
            font-weight: 600;
            
        }
 
        .react-calendar__tile:enabled:hover,
        .react-calendar__tile:enabled:focus {
            background: #F20544;
            color: white;
            border-radius: 50%;
        }
        .react-calendar__tile--active {
            background: #F20544;
            color: white;
            border-radius: 50%;
        }
        .react-calendar__tile{
            height: 50px;
            max-width: 50px;
            
        }
`
export default RezCalendar;