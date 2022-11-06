import RezModal from "../../components/reservationCp/reservationModal/rezDateModal";
import RezMain from "../../components/reservationCp/reservaionMain/reservationMain";

import RezInfoModal from "../../components/reservationCp/reservationModal/rezInfoModal";
import RezFinModal from "../../components/reservationCp/reservationModal/rezFinModal";






const ReservationMain = () => {
    return(
        <>
        <RezMain></RezMain>
        {/* <RezModal></RezModal> */}
        {/* <RezInfoModal></RezInfoModal> */}
        <RezFinModal></RezFinModal>
        </>
    );
}
export default ReservationMain;