import { useState, useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
const RezPersonnel = () =>{

    // 리덕스관련
    const dispatch = useDispatch();
    const state = useSelector((state) => state.reservation);
    useEffect(()=>{
        console.log("인원 수 컴포넌트:"+state.rezPerson)
    },[state.rezPerson])

    const[select, setSelect] = useState([]);
    const selectRef = useRef();
    const handleSelect = useCallback(()=>{
        var result = [];
        for (let i = 1; i <= 50; i++) {
                result[i] = i;
        }
        setSelect(result);
    },[select])
    const handlePersonnel = useCallback(()=>{
        dispatch({
            type: "INSERT_REZPERSON",
            data:{
                rezPerson: selectRef.current.value,
            }
        })

    })
    if(state.rezTime !== ''){
        return null;
    }




    return(
        <>
            <p>인원수를 선택해주세요</p>
                    <SelectWrap>
                        <select onClick={handleSelect} onChange={handlePersonnel} ref={selectRef}>
                        {select.map((select)=>(
                        <option key={select} value={select}>{select}</option>
                        ))}
                        </select>
                 </SelectWrap>
        </>
    );
}
const SelectWrap = styled.div`
    margin: 0 auto;
    & select{
        width: 100%;
        text-align: center;
    }

    
`
export default RezPersonnel;