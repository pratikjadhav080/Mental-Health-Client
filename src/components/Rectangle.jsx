import { Link } from 'react-router-dom'
import '../styles/landing.css'

export function Rectangle({props,image,indicator}) {

    const hamburgerclick = () =>{
        props()
    }
    

    return (
        <>
            <div onClick={hamburgerclick} className="lpage_rectangle">
                <div className="lpage_rectangle1">
                    <div id="task1">Todays Task :</div>
                </div>

                <div className="lpage_rectangle2">
                    <div id="meditation">Tap to start 15 min meditation</div>
                    <Link to="meditate"><img id="heart2" src= {image?image:"./landing_images/heart.png" } alt="" /></Link>
                </div>

                <div className="lpage_rectangle3">
                    <div id="playing">Let's Increase your focus-Tap to play</div>
                    <Link to="games"><img id="heart2" src= {indicator?"./landing_images/heart.png":image?image:"./landing_images/heart.png"} alt="" /></Link>
                </div>

                <div className="lpage_rectangle4">
                    <div id="diary">Dear diary-Positive writing</div>
                    <img id="heart2" src="./landing_images/heart.png" alt="" />
                </div>
            </div>
        </>
    )
}