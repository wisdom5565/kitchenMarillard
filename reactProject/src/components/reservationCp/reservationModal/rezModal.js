import { useState,useCallback, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import {Dialog, DialogContent} from "@material-ui/core";
// 이미지,아이콘 관련
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faXmark} from '@fortawesome/free-solid-svg-icons';
import black from './black.png';
// 예약컴포넌트관련
import RezPersonnel from './rezDateCp/rezPersonnel';
import RezCalendar from './rezDateCp/rezCalendar';
import RezTime from './rezDateCp/rezTime';
import RezInfoModal from './rezInfoModal';
import RezFinModal from './rezFinModal';
import { useDispatch, useSelector } from "react-redux";

const RezModal = () =>{
    // 리덕스관련
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reservation);
    useEffect(()=>{
        console.log(state)
        setDialog(state.modal)
    },[state.modal])
    useEffect(()=>{
        console.log(state)

    },[state])
    
    // 모달제어
    const[dialog,setDialog] = useState(false);
    const closeHandler = useCallback(()=>{
            dispatch({
                    type: "CTRL_MODAL"
                    })
            dispatch({
                type: "DELETE_REZ"
            })
    }, [dispatch, state])
   
    return(
        <Dialog open={dialog}>
            <MyCloseButton onClick={closeHandler}>
                <FontAwesomeIcon icon={faXmark}/>
            </MyCloseButton>
            <BlackLogo src={black}/>
            <MyDialogContents>
                <DateWrap>
                    <RezPersonnel></RezPersonnel>
                    <RezCalendar></RezCalendar>
                    <RezTime></RezTime>
                </DateWrap>
                <RezInfoModal></RezInfoModal>
                <RezFinModal></RezFinModal>
            </MyDialogContents>               
        </Dialog>

    );

}
const DateWrap = styled.div`
    text-align: center;
`
const MyDialogContents = styled(DialogContent)`
     @font-face {
        font-family: 'MonoplexKR-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    font-family: 'MonoplexKR-Regular';
    /* text-align: center; */
    font-weight: 600;
    width: 400px;
    min-height: 100px;
    max-height: 680px;
    margin-bottom: 10px;
    
    
`
const BlackLogo = styled.img`
    position: relative;
    left: 125px;
    width: 200px;
`

const MyCloseButton = styled.div`
    position: relative;
    left: 400px;
    top: 5px;
    text-align: right;
    width: 10px;
    padding: 10px 14px;
    cursor: pointer;
`


export default RezModal;