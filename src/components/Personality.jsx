import '../styles/personality.css'
import { Skip } from './Skip'
import { StaticHeader } from './Staticheader'
import { Link } from 'react-router-dom'

export const Personality = () => {

    return (
        <>
            <div id="personality">
                <StaticHeader />
                <p id="person">Your personality</p>
                <p id="character">You are 45% extravert and 55% introvert.The color you like the most is blue which reveals you are calm and a practical person. You least likely to go for brown color says that you don’t like to be alone. Also, you are charismatic in nature.</p>


                <Link to="/Loadingpage">
                    <Skip prop="Next" />
                </Link>
            </div>
        </>
    )

}