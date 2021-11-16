import '../styles/landing.css'

export function Navbar({props}) {

    const hamburgerclick = () =>{
        props()
    }
    

    return (
        <div onClick={hamburgerclick} className="headerBox1">
            <p id="time1">09:00</p>
            <img id="wifi1" src="./landing_images/wifi1.png" alt="wifi1"></img>
            <img id="tower1" src="./landing_images/tower1.png" alt="wifi1"></img>
            <img id="battery1" src="./landing_images/battery1.png" alt="wifi1"></img>
        </div>
    )
}