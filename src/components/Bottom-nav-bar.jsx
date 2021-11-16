import '../styles/landing.css'
import { Link } from 'react-router-dom'

export function BottomNavBar() {

    return (
        <>
            <div className="lpage_bottom_nav_bar">
                <img id="home" src="/./landing_images/home.png" alt="" />
                <Link to="/home-page" ><div id="home1">Home</div></Link>

                <img id="game" src="/./landing_images/game.png" alt="" />
                <Link to="/games"><div id="game1">Game</div></Link>

                <img id="meditate" src="/./landing_images/meditate.png" alt="" />
                <Link to="/meditate"><div id="meditate1">Meditate</div></Link>

                <img id="stats" src="/./landing_images/stats.png" alt="" />
                <Link to="/daily-task-page" ><div id="stats1">My Stats</div></Link>
            </div>
        </>
    )
}