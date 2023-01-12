import { StylesProvider } from '@material-ui/core';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

const RezFinModal = ()=>{
     // 리덕스관련
     const dispatch = useDispatch();
     const state = useSelector((state) => state.reservation);
     const cancleHandler = useCallback(()=>{
        dispatch({
            type: "DELETE_REZ"
        })
     },[state,dispatch]);
    
    if(state.rezTel === ''){
        return null;
    }

    return(
        <>
            <InfoBox>
                <InfoTitle>예약이 완료되었습니다!</InfoTitle>
                <p>이름: {state.rezName}</p>
                <p>전화번호: {state.rezTel}</p> 
                <p>인원수: {state.rezPerson}</p>
                <p>날짜: {state.rezDate}</p>
                <p>예약시간: {state.rezTime}</p>
                <p>기타사항: {state.rezContents}</p>
            </InfoBox>
                <MyButton onClick={cancleHandler}>예약수정/취소</MyButton>
        </>

    );
}   
const InfoBox = styled.div`
    text-align: left;
    left: 13px;
    position: relative;
    top: 20px;
`

const InfoTitle = styled.p`
    text-align: center;
    font-size: 1.1em;
    padding-bottom: 15px;
`

const MyButton = styled.button`
       
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
            border: 0;
           :hover{

            cursor: pointer;
           }
        
        position: relative;
        left: 2.5px;
         border-radius: 3px;
         top: 15px;
         height: 48px;
         padding: 0 30px;
         width: 100%;
         border-radius: 15px;

`

export default RezFinModal;