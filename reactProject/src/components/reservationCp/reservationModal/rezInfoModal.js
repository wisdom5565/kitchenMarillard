
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";


const RezInfoModal = ()=>{
    // 전화번호 정규식관련
    const[inputValue, setInputValue] = useState("");
    const[telError, setTelError] = useState();
    const[nameError, setNameError] = useState();
     // 리덕스관련
     const dispatch = useDispatch();
     const state = useSelector((state) => state.reservation);

     useEffect(()=>{
        console.log(state)

    },[state])
    
     const nameRef = useRef(null);
     const contentsRef = useRef(null);
    const telChangeHandler = (e) => {
        const regex = /^[0-9]{0,11}$/;
        if(regex.test(e.target.value)){
 
            setInputValue(e.target.value);

        }
        
    }
    
    
    
    const sendRezInfo = useCallback(()=>{
        if(inputValue === undefined || inputValue === ""){
            if(nameRef.current.value.length <= 1){
                setNameError("*이름을 1글자 이상 입력해 주세요.*")
            }else{
                setNameError(null)
            }
            setTelError("*전화번호를 입력해주세요.*")
        }else if(inputValue.length !== 11){
            if(nameRef.current.value.length <= 1){
                setNameError("*이름을 1글자 이상 입력해 주세요.*")
            }else{
                
                setNameError(null)
            }
            setTelError("*전화번호 11자리를 모두 입력해주세요.*")
        }else{
            setTelError(null)
            if(nameRef.current.value.length <= 1){
                setNameError("*이름을 1글자 이상 입력해 주세요.*")
            }else{
                dispatch({
                    type: "INSERT_REZDATA",
                    data:{
                        rezName: nameRef.current.value,
                        rezTel: inputValue,
                        rezContents: contentsRef.current.value,
                    }
                })
                setInputValue("");
            }

        }

    },[nameError,telError,inputValue, dispatch, state])    
        
    if(state.rezTime === ''){
        return null;
    }else if(state.rezTel !== ''){
        return null;
    }
    return(
        <>
                <p>이름  <ErrorMessage>{nameError}</ErrorMessage></p>
                    <InputInfo type="text" placeholder = "이름을 입력해주세요." ref={nameRef}/>
                <p>전화번호 <ErrorMessage>{telError}</ErrorMessage></p>
                    <InputInfo type="text" placeholder = "-를 제외하고 입력해주세요(010xxxxxxxx)" onChange = {telChangeHandler} value={inputValue}/>
                <p>기타정보</p>
                    <InputInfo maxLength={20} type="text" placeholder = "최대 20자까지 입력 가능합니다." ref={contentsRef}/>
                    <MyButton onClick={sendRezInfo}>예약하기</MyButton>
            </>

    );
}

    const ErrorMessage = styled.span`
        color: red;
        font-size: 0.8em;
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
            /* background-color: #5c0041;
            color: #fd0041; */
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

export default RezInfoModal;