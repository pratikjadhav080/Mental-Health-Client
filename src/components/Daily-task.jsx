import '../styles/landing.css'
import '../styles/daily-task.css'
// import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
// import { Navbar } from './Navbar'
import { StaticHeader } from './Staticheader'
import { Heading } from './Heading'


export function DailyTask() {
    return (
        <>
            <div className="lpage_maindiv">

                <StaticHeader />

                <Heading heading={"My Stats"} image={"leftarrow.png"} route={`/landingpage`}/>

                <div id="mindfulnes">MY MINDFULNESS</div>

                <div id="d_block">
                    {/* <img id="D_T_ONE" src="./landing_images/D_T_ONE.png" alt="" /> */}
                    <img id="D_T_TWO" src="./landing_images/D_T_TWO.png" alt="" />
                    <img id="D_T_THREE" src="./landing_images/D_T_THREE.png" alt="" />
                </div>
                <img id="D_T_ONE" src="./landing_images/D_T_ONE.png" alt="" />

                <div id="positivity">75% POSITIVITY</div>
                <div id="task">DAILY TASK</div>


                <img id="mon1" src="./landing_images/Rectangle 193.png" alt="" />
                <img id="tue1" src="./landing_images/Rectangle 194.png" alt="" />
                <img id="thu1" src="./landing_images/Rectangle 196.png" alt="" />
                <img id="fri1" src="./landing_images/Rectangle 197.png" alt="" />
                <img id="sat1" src="./landing_images/Rectangle 198.png" alt="" />
                <img id="sun1" src="./landing_images/Rectangle 199.png" alt="" />

                <div id="mon">M</div>
                <div id="tue">T</div>
                <div id="wed">W</div>
                <div id="thu">T</div>
                <div id="fri">F</div>
                <div id="sat">S</div>
                <div id="sun">S</div>

                <div id="achievements">ACHIEVEMENTS</div>

                <div>
                    <BottomNavBar />
                </div>

                <div>
                    <Bottom />
                </div>
            </div>
        </>
    )
}