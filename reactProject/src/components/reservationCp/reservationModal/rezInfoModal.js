import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import styled from "styled-components";

const RezInfoModal = ()=>{
    return(
        <Dialog open={true} style = {{textAlign:"center"}}>
            <DialogTitle>예약자정보입력</DialogTitle>
            <DialogContent style = {{width: "500px"}}>

            <InputInfo type="text" placeholder = "이름을 입력해주세요"/>
            <InputInfo type="text" placeholder = "전화번호를 입력해주세요"/>
            <InputInfo type="text" placeholder = "기타정보"/>
            <InputInfo type="text" placeholder = "샬라샬라"/>
            <Button style={{backgroundColor:"black", color: "white"}}>예약하기</Button>
            </DialogContent>

        </Dialog>

    );
}
const InputInfo = styled.input `
    display: block;
    
`
export default RezInfoModal;