import "../styles/Welcomegif.css"
import { StaticHeader } from "./Staticheader"
import { Bottom } from "./Bottom"
import { useHistory } from "react-router"


export const Welcomegif = () => {

    const history = useHistory();

    setTimeout(()=>{
        history.push("/bookingcomplete");
    },3000)


    return <div id="Welcome-gif-Box">
        <StaticHeader/>
        <img id="welcome-gif-img" src="welcomegif.jpg" alt="welcome gif image" />
        <h3 id="welcome-gif-payment">Processing your payment</h3>
        <h6 id="welcome-gif-back">Do not refresh or go back</h6>
        <Bottom></Bottom>
    </div>
}