import '../styles/landing.css'
import '../styles/meditate.css'
import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
import { Navbar } from './Navbar'
import { Rectangle } from './Rectangle'
import { useEffect, useState } from 'react'
import { Sidebar } from './Sidebar'
import { StaticHeader } from './Staticheader';

export function Meditate() {

    const [name, setName] = useState("")

    useEffect(()=>{
        const loggeduser = JSON.parse(localStorage.getItem("data"))
        setName(loggeduser.user.name)
    },[])
   

    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(true)
    const hideSidebar = () => setSidebar(false)

    return (
        <>
            <div className="lpage_maindiv">
                <div >
                <StaticHeader/>
                </div>

                <div>
                    <AppStatusBar props={showSidebar}/>
                </div>

                <div>
                    <img onClick={hideSidebar} id="m_girl" src="./landing_images/mindfulness.png" alt="" />
                </div>

                <div>
                    <Rectangle props={hideSidebar} image="./landing_images/purple.png" indicator="yes"/>
                </div>

                <div>
                    <BottomNavBar/>
                </div>

                <div>
                    <Bottom />
                </div>
                <Sidebar prop={sidebar} username={name}/>
            </div>
        </>
    )
}