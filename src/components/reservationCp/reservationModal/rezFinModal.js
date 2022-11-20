import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";

const RezFinModal = ()=>{
    return(
        <Dialog open={true}>
            <DialogTitle>예약정보확인</DialogTitle>
            <DialogContent>
                날짜:<br/>
                예약시간:<br/>
                인원수:<br/>
                이름:<br/>
                전화번호:<br/>
                <Button>예약수정</Button>
                <Button>예약취소</Button>
            </DialogContent>
        </Dialog>
    );
}   
export default RezFinModal;