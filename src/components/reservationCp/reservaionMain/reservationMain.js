
import RezButton from "./button";
import RezContents from "./contents";
import styled from "styled-components";
const RezMain  = () =>{

    return( 
        <>
        {/* 콘텐츠의 위치를 잡아주는 스타일 */}
        <RezContentsWrap>
            <RezContents/>
        </RezContentsWrap>
        {/* 버튼 위치를 잡아주는 스타일 */}
        <RezButtonWrap>
            <RezButton/>
        </RezButtonWrap>
        </>
        );
}
export default RezMain; 

const RezContentsWrap = styled.div`
    box-sizing: border-box;
    max-width: 100rem;
    min-width: 18.75rem;
    width: 60%;
    height: 100%;
    margin: 0 auto;
`
const RezButtonWrap = styled.div`
    box-sizing: border-box;
    max-width: 10rem;
    min-width: 18.75rem;
    margin-left: 870px;
    margin-top: 100px;
    

`