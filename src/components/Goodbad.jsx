import '../styles/goodbad.css'
import { Skip } from './Skip'
import { StaticHeader } from './Staticheader'
import { Link } from 'react-router-dom'

export const Goodbad = () => {

    return (
        <>
            <div id="goodbad">
                <StaticHeader />
                <p id="feeling">How are you feeling?</p>

                <Link to="/goal">
                    <img id="good" src='good.jpg' alt="good"></img>
                </Link>
                
                <Link to="/goal">
                    <img id="bad" src='bad.jpg' alt="bad"></img>
                </Link>

                <p id="goodtext">GOOD</p>
                <p id="badtext">BAD</p>

                <Link to="/goal">
                    <Skip prop="Skip" />
                </Link>
            </div>
        </>
    )

}