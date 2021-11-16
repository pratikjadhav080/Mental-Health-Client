import '../styles/goal.css'
import { Skip } from './Skip'
import { StaticHeader } from './Staticheader'
import { Link} from 'react-router-dom'

export const Goal = () => {

    return (
        <>
            <div id="goal">
                <StaticHeader />
                <p id="whatisgoal">What is your Goal?</p>

                <Link to="/funtest">
                    <img className="allimages" id="anxietyimg" src="anxiety.jpg" alt="anxiety"></img>
                </Link>

                <Link to="/funtest">
                    <img className="allimages" id="mindfulnessimg" src="mindfulness.png" alt="mindfulness"></img>
                </Link>

                <Link to="/funtest">
                    <img className="allimages" id="sleepimg" src="sleep.jpg" alt="sleep"></img>
                </Link>

                <Link to="/funtest">
                    <img className="allimages" id="Stayfocusedimg" src="Stayfocused.jpg" alt="Stayfocused"></img>
                </Link>



                <p id="reduce">Reduce anxiety & depression</p>
                <p id="mind">Mindfulness</p>
                <p id="stay">Stay focused</p>
                <p id="sleep">Sleep</p>

                <Link to="/funtest">
                    <Skip prop="Skip" />
                </Link>


            </div>
        </>
    )

}