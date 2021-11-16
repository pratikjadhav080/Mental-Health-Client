import { StaticHeader } from "./Staticheader";
import { Heading } from "./Heading"
import "../styles/therapist-appointment.css"
import { Bottom } from "./Bottom";
import { Link } from "react-router-dom";

function TherapistAppointment() {

    const { phone, email } = JSON.parse(localStorage.getItem("personal"))
    const { doctorid } = JSON.parse(localStorage.getItem("bookData"))

    return (
        <div id="therapist-appointment-cont">
            <StaticHeader />
            <Heading image={"leftarrow.png"} heading={"THERAPIST APPOINTMENT"} route={`/booking/${doctorid}`}/>
            <div id="mobile-no-div">+91{phone}</div>
            <div id="therapist-line-div"></div>
            <p id="gmail-div">{email}</p>

            <div>Payment Mode</div>

            <img src="paymentMode/atmcard.png" id="atm-card-mode" />
            <div>CARD</div>
            <Link to="/cardpayment">
                <img src="paymentMode/rightdirection.png" id="rightimage"/>
            </Link>
            <img src="paymentMode/upicard.png" id="upi-card-mode" />
            <div>UPI</div>
            <img src="paymentMode/rightdirection.png" />

            <img src="paymentMode/walletcard.png" id="wallet-card-mode" />
            <div>WALLET</div>
            <img src="paymentMode/rightdirection.png" />

            <img src="paymentMode/netbankingcard.png" id="netbanking-card-mode" />
            <div>NET BANKING</div>
            <img src="paymentMode/rightdirection.png" />
            <Bottom />
        </div>
    )
}

export { TherapistAppointment }