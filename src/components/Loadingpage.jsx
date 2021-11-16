// import { Link} from 'react-router-dom'
import { StaticHeader } from "./Staticheader"
import { Bottom } from "./Bottom"
import { useHistory } from "react-router"

export const Loadingpage = ()=>{

    const history = useHistory();

    setTimeout(()=>{
        history.push("/createavatar");
    },3000)

    return <>
    <div id="Welcome-gif-Box">
        <StaticHeader/>
        <img id="welcome-gif-img" src="welcomegif.jpg" alt="welcome gif image" />
        <h3 id="welcome-gif-payment">Creating your avatar for you...</h3>
        <Bottom></Bottom>
    </div></>
}