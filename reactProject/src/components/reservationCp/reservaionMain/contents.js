import styled from 'styled-components'

const RezContents = () => {
    return(
        <>
        <ContentsWrap>
        <ContentsTitle>영업시간</ContentsTitle>
        <ContentsBox>
            <TextField>
            화요일~토요일<br/>
            (매주 일, 월 정기휴무)<br/>
            영업시간: 11:30~21:00<br/>
            쉬는 시간: 15:00~17:30<br/>
            주문 마감: 점심, 저녁 영업 마감 30분 전<br/>
            kitchen.maillard@sandboxsquare.net<br/>
            이메일로 연락 부탁드립니다.<br/>
            정기 휴무<br/>
            매주 일요일, 월요일 정기 휴무
            </TextField>
        </ContentsBox>
        </ContentsWrap>
        <ContentsWrap>
        <ContentsTitle>안내 및 유의사항</ContentsTitle>
        <ContentsBox>
            <TextField>
            {/* [예약]<br/>
            캐치테이블을 통해서만 예약 가능합니다.<br/>
            매월 15일과 말일 다음달 예약이 오픈 됩니다.<br/>
            자세한 예약 일정은 위 예약 일정을 통해 확인 가능하며, 매장 상황에 따라 변동될<br/>
            수 있습니다.<br/>
        이용에 대한 문의는 kitchen.maillard@sandboxsquare.net으로 부탁드립니다.<br/> */}
            <span>현장 웨이팅</span><br/>
            예약 외 현장 방문 가능합니다.<br/>
            매장 정문 앞 웨이팅 시스템을 통해 등록 가능합니다.<br/>
            웨이팅 접수 시간<br/>
            점심 | 10:30-11:20<br/>
            저녁 | 16:30-17:20<br/>
            웨이팅 등록을 위한 대기줄 발생 시점은 알 수 없습니다. 점심 웨이팅 등록 번호는<br/>
            저녁 웨이팅으로 이어지지 않습니다.<br/>
            </TextField>
        </ContentsBox>
        </ContentsWrap>
        </>
    );
    
}
const ContentsWrap = styled.div`
    
    display: inline-block;
    padding-left: 30px;
`
const ContentsTitle = styled.p`
    @font-face {
    font-family: 'MonoplexKR-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
    text-align: center;
font-family: 'MonoplexKR-Regular';
font-weight: 700;
font-size: 1.7em;
`
const ContentsBox = styled.div`

    /* display: inline-block; */
    width: 520px;
    height: 350px;
    border: 3px solid black;
    border-radius: 20px;
    
    
`
const TextField = styled.div`
    /* display: inline-block; */
    font-family: 'MonoplexKR-Regular';
    font-weight: 100;
    font-size: 1.2em;
    padding-top: 10%;
    line-height: 25px;
    text-align: center;
    & span{
        font-weight: 600;
    }
`

export default RezContents;