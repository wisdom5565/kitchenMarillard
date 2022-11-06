import Dialog from '@material-ui/core/Dialog';
// import DialogAction  from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContents from '@material-ui/core/DialogContent';
// import  TextField  from '@material-ui/core/TextField';
import  Button  from '@material-ui/core/Button';
// import { WithStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import { useCallback, useState } from 'react';
import 'react-calendar/dist/Calendar.css'; // css import
import styled from 'styled-components';
const RezModal = () =>{
   
   const cheakValue = useCallback((e)=>{
    console.log(e.target.value)
   },[])
    const [value, onChange] = useState(new Date());
    return(
        <Dialog open={true}>
        {/* <img src='close.png' alt='닫기' onClick={closeHandler}/> */}
    <DialogTitle>예약가능날짜</DialogTitle>
    <DialogContents>
        <p>인원수를 추가해주세요!</p>
        <SelectWrap>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
        </select> 
        </SelectWrap>
        <p>달력</p>
        <div><Calendar onChange={onChange} value={value} /></div>
        
        <p>예약가능시간</p>
        <Button style={{border:"3px", color:"#5c0041", borderColor:"#5c0041"}}>11:00</Button>
        <Button style={{border:"3px", color:"#5c0041", borderColor:"#5c0041"}}>12:00</Button>
        <Button style={{border:"3px", color:"#5c0041", borderColor:"#5c0041"}}>13:00</Button>
        <Button style={{border:"3px", color:"#5c0041", borderColor:"#5c0041"}}>14:00</Button>
        <Button style={{border:"3px", color:"#5c0041", borderColor:"#5c0041"}}>15:00</Button>
        <div>
            
        </div>
    </DialogContents>
    </Dialog>
    );
    
}

const SelectWrap = styled.div`
    margin: 0 auto;
    & select{
        width: 200px;
        text-align: center;
    }
    
`
export default RezModal;