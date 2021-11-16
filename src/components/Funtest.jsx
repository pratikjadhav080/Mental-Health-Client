import '../styles/funtest.css'
import { Skip } from './Skip'
import { StaticHeader } from './Staticheader'
import { Link} from 'react-router-dom'

export const Funtest = () => {

    return (
        <>
            <div id="funtest">
                <StaticHeader />
                <p id="funtestp">Take a fun test to help us know you.</p>
                <img id="funtestimg" src="funtest.jpg" alt="funtest"></img>

                <Link to="/colors">
                <button id="start">Start</button>
                </Link>

                <Link to="/loadingpage">
                <Skip prop="Skip"/>
                </Link>


            </div>
        </>
    )

}