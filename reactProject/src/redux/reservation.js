const initialState = {
    modal: false,
    rezPerson: 0,
    rezDate:"",
    rezTime:"",
    rezName:"",
    rezTel:"",
    rezContents:"",
}
;

export const DELETE_REZ = "DELETE_REZ";
// 모달관련
export const CTRL_MODAL = "CTRL_MODAL";
// 예약정보관련(인원 날짜 시간)
export const INSERT_REZPERSON = "INSERT_REZPERSON";
export const INSERT_REZDATE = "INSERT_REZDATE";
export const INSERT_REZTIME = "INSERT_REZTIME";
// 예약자 정보(이름 전화번호 기타사항)
export const INSERT_REZDATA = "INSERT_REZDATA";


const todo = (state = initialState, action) =>{
    switch(action.type){
        case INSERT_REZDATA:
            var copy_state = {...state};
            copy_state.rezName = action.data.rezName;
            copy_state.rezTel = action.data.rezTel;
            copy_state.rezContents = action.data.rezContents;
            return state = copy_state;
        case DELETE_REZ:
            var copy_state = {...state};
            copy_state.rezPerson = 0;
            copy_state.rezDate = "";
            copy_state.rezTime = "";
            copy_state.rezName = "";
            copy_state.rezTel = "";
            copy_state.rezContents = "";
            return state = copy_state;
        case CTRL_MODAL:
                var copy_state = {...state};
                if(copy_state.modal){
                    copy_state.modal = false;
                }else{
                    copy_state.modal = true;   
                }
            return state = copy_state ;  
        case INSERT_REZPERSON:
            var copy_state = {...state};
            copy_state.rezPerson = action.data.rezPerson;
            return state = copy_state;
        case INSERT_REZDATE:
            var copy_state = {...state};
            copy_state.rezDate = action.data.rezDate;
            return state = copy_state;
        case INSERT_REZTIME:
            var copy_state = {...state};
            copy_state.rezTime = action.data.rezTime;
            return state = copy_state;
        
       
        default:
            return state;
    }
}
export default todo;