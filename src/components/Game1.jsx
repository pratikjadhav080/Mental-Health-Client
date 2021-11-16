import '../styles/landing.css'
import '../styles/game1.css'
import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
import { Navbar } from './Navbar'
import { useState } from 'react'
import { Sidebar } from './Sidebar'

export function Game1() {

    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(true)
    const hideSidebar = () => setSidebar(false)

    return (
        <>
            <div className="lpage_maindiv">
                <div >
                    <Navbar props={hideSidebar}/>
                </div>

                <div>
                    <AppStatusBar props={showSidebar}/>
                </div>

                <div>
                    <img onClick={hideSidebar} id="g1_girl" src="./landing_images/Component22.png" alt="" />
                </div>

                <div>
                    <BottomNavBar props={hideSidebar}/> 
                </div>

                <div>
                    <Bottom />
                </div>

                <Sidebar prop={sidebar}/>
            </div>
        </>
    )
}