
import { StylesProvider } from '@material-ui/core';
// import  TextField  from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faXmark} from '@fortawesome/free-solid-svg-icons';
import DialogContents from '@material-ui/core/DialogContent';
import  Button  from '@material-ui/core/Button';
import Calendar from 'react-calendar';
import {useState, useCallback } from 'react';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import moment from "moment";
import black from './black.png';


const RezModal = () =>{
   
//    const cheakValue = useCallback((e)=>{
//     console.log(e.target.value)
//    },[])
    const [value, onChange] = useState(new Date());
    const[personnel, setpersonnel] = useState([]);
    const[dialog,setdialog] = useState(true);
    const closeHandler = useCallback(()=>{
        setdialog((prev) => !prev);
    }, [dialog])
    const selectPersonnel = useCallback(()=>{
        var result = [];
        for (let i = 1; i <= 50; i++) {
                result[i] = i;
        }
        setpersonnel(result);
    },[personnel])
    const personnelList = personnel.map((personnel)=>(<option key={personnel}>{personnel}</option>));
    return(
        <StylesProvider>

        <Dialog open={dialog}>

            <MyCloseButton onClick={closeHandler}>
                <FontAwesomeIcon icon={faXmark}/>
            </MyCloseButton>
            <BlackLogo src={black}/>
            <MyDialogContents>

                <p>인원수를 선택해주세요</p>
                    <SelectWrap>
                        <select onClick={selectPersonnel} >
                          {personnelList}
                        </select>
                 </SelectWrap>
             <p>날짜를 선택해주세요</p>
                <div>
                    <MyCalendar 
                        onChange={onChange} 
                        value={value}
                        showNeighboringMonth={false}
                        formatDay={(locale, date) => moment(date).format("DD")}
                        />
                </div>
        
                <p>예약가능시간</p>
                <MyRezbutton>11:00</MyRezbutton>
                <MyRezbutton>12:00</MyRezbutton>
                <MyRezbutton>13:00</MyRezbutton>
                <MyRezbutton>14:00</MyRezbutton>
                <MyRezbutton>14:00</MyRezbutton>
                <MyRezbutton>14:00</MyRezbutton>
                <MyRezbutton>14:00</MyRezbutton>
                <MyRezbutton>14:00</MyRezbutton>
            </MyDialogContents>
        </Dialog>
    </StylesProvider>
    );
    
}
const BlackLogo = styled.img`
    position: relative;
    left: 100px;
    width: 200px;
`
const SelectWrap = styled.div`
    margin: 0 auto;
    & select{
        width: 100%;
        text-align: center;
    }

    
`
const MyDialogContents = styled(DialogContents)`
    @font-face {
    font-family: 'MonoplexKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
    text-align: center;
    font-family: 'MonoplexKR-Regular';
    font-weight: 600;
    max-width: 350px;

`
const MyCloseButton = styled.div`
    position: relative;
    left: 360px;
    top: 5px;
    text-align: right;
    width: 10px;
    padding: 10px 14px;
    cursor: pointer;
`
const MyCalendar = styled(Calendar)`
    @font-face {
        font-family: 'MonoplexKR-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    border-radius: 15px;
    height: 350px;
    border: none;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
    .react-calendar{
            font-family: 'MonoplexKR-Regular';
   
        }
        abbr[title] {
            text-decoration: none;
        }
        .react-calendar__navigation button{
            color: #F26363;
            border-radius: 15px;
        }
        .react-calendar__tile--now {
            background: #F2E963;
            color: black;
            border-radius: 50%;
        }
        .react-calendar__tile--now:enabled:hover,
        .react-calendar__tile--now:enabled:focus {
            background: #F2E963;
            color: black;
            border-radius: 50%;
        }
        .react-calendar__navigation__label > span {
            font-family: 'MonoplexKR-Regular';
            font-size:  1.1em;
            font-weight: 700;
            color: #F26363;
        }
        .react-calendar__month-view__weekdays {
            font-size: 0.9rem;
            font-weight: 600;
            
        }
        .react-calendar__tile {
            font-family: 'MonoplexKR-Regular';
            text-align: center;
        }
        .react-calendar__tile:enabled:hover,
        .react-calendar__tile:enabled:focus {
            background: #F26363;
            color: white;
            border-radius: 50%;
        }
        .react-calendar__tile--active {
            background: #F26363;
            color: white;
            border-radius: 50%;
        }
        .react-calendar__tile{
            height: 50px;
            max-width: 50px;
            
        }
`
const MyRezbutton = styled(Button)`
    position: relative;
    &&{
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
           :hover{
            background-color: #5c0041;
            color: #fd0041;
           }
        } 
`
export default RezModal;