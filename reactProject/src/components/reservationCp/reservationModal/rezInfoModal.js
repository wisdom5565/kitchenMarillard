import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import styled from "styled-components";
import { StylesProvider } from "@material-ui/core";
import black from './black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faXmark} from '@fortawesome/free-solid-svg-icons';
import {useState, useCallback } from 'react';
const RezInfoModal = ()=>{
    const[dialog,setdialog] = useState(true);
    const closeHandler = useCallback(()=>{
        setdialog((prev) => !prev);
    }, [dialog])
    return(
            <StylesProvider>
        <Dialog open={dialog}>
        <MyCloseButton onClick={closeHandler}>
                <FontAwesomeIcon icon={faXmark}/>
            </MyCloseButton>
            <BlackLogo src={black}/>
            <MyDialogContents>
                <form>
                <p>이름</p>
                    <InputInfo type="text" placeholder = "이름을 입력해주세요"/>
                <p>전화번호</p>
                    <InputInfo type="text" placeholder = "전화번호를 입력해주세요"/>
                <p>기타정보</p>
                    <InputInfo type="text" placeholder = "기타정보"/>
                <p>샬라</p>
                    <InputInfo type="text" placeholder = "샬라샬라"/>
                    <MyButton>예약하기</MyButton>
                </form>
            </MyDialogContents>

        </Dialog>
            </StylesProvider>

    );
}
const BlackLogo = styled.img`
    position: relative;
    left: 125px;
    width: 200px;
`
const InputInfo = styled.input `
    display: block;
    width: 100%;
    @font-face {
        font-family: 'MonoplexKR-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    text-align: left;
    font-family: 'MonoplexKR-Regular';
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
    
`


const MyDialogContents = styled(DialogContent)`
     @font-face {
        font-family: 'MonoplexKR-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    font-family: 'MonoplexKR-Regular';
    text-align: left;
    font-weight: 600;
    width: 400px;
    height: 450px;
    &p{
        
    }
    
`
    const MyButton = styled(Button)`
       &&{
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
           :hover{
            background-color: #5c0041;
            color: #fd0041;
           }
        } 
        position: relative;
        left: 2.5px;
         /* border: 0; */
         border-radius: 3px;
         top: 15px;
         height: 48px;
         padding: 0 30px;
         width: 100%;
         border-radius: 15px;
         padding-bottom: 10px;
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
export default RezInfoModal;