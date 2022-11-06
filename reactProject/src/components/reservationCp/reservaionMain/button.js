import { useCallback, useState } from "react";
import styled from "styled-components";
const RezButton = () =>{
    const [dialog, setdialog] = useState(false);
    const openHandeler = useCallback(()=>{
        setdialog((prev) => !prev);
        console.log(dialog);
    }, [])
    return(
        <Rezbutton onClick={openHandeler}>예약하기</Rezbutton>
    )
}
export default RezButton;

const Rezbutton = styled.button`
    @font-face {
    font-family: 'MonoplexKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
    background-color: black;
    width: 140px;
    height: 50px;
    border-radius: 15px;
    color: white;
    font-family: 'MonoplexKR-Regular';
    font-size: 1.0em;
    cursor: pointer;
    font-weight: 800;
    /* :hover{
        poin
    } */
`