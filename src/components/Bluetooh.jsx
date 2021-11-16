import { StaticHeader } from './Staticheader'
import "../styles/bluetooh.css"


export const Bluetooh = () => {
    return (
        <>
            <div id="BluetoohContainer">
                <StaticHeader></StaticHeader>
                <div id="BluetoohRow1">
                    <img id="gamesimg" src="arrow.jpg" alt="" />
                    <label>How to connect VR headset</label>
                </div>

                <div id="BluetoohRow2">
                    <h2>1. Connecting VR Glasses</h2>

                <ul>
                <li>Choose the video that you want to meditate with.</li>
                <li>Take the VR headset and then open the flap from you can slide in your phone.</li>
                <li>Adjust the phone in the place.</li>
                <li>Click on play button </li>
                <li>Then put your headset and you are good to go.</li>
                </ul> 
                </div>
                
                

            </div>
        </>
    )
}