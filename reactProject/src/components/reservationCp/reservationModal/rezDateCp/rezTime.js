
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
const RezTime = () =>{

     // 리덕스관련
     const dispatch = useDispatch();
     const state = useSelector((state) => state.reservation);
    // 예약 가능한 시간의 배열
    const [rezTimes, setRezTimes] =useState(['11:30','12:00','13:00','14:00','15:00']);


    const selectTime = useCallback((e)=>{
        dispatch({

            type: "INSERT_REZTIME",
            data:{
                rezTime: e.target.value,
            }
        }
        )
    },[dispatch, state]) 
    // 해당 날짜가 현재 날짜보다 전이라면 null리턴
    if ((parseInt(state.rezDate.substr(0,4)) <= 2023 && parseInt(state.rezDate.substr(5,2)) <= 1 && parseInt(state.rezDate.substr(8,5)) <= 10) || state.rezDate === '') {
        return null;
    }else if(state.rezTime !== ''){
        return null;
    }




    return(
        <>
             <p>예약가능시간</p>
                {rezTimes.map((time)=>(
                    <MyRezbutton key={time}value={time} onClick={selectTime}>{time}</MyRezbutton>
                ))}
        </>
    );
}
const MyRezbutton = styled.button`
        position: relative;
        margin: 2px;
        @font-face {
        font-family: 'MonoplexKR-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        }
        font-family: 'MonoplexKR-Regular';
        font-weight: 600;
        background-color: #ff9600;
        color: #5c0041;
        width: 80px;
        height: 40px;
        border: none;
        border-radius: 10px;
           :hover{
            cursor: pointer;
           }
        
`
export default RezTime;