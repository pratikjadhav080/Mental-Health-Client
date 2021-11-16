import '../styles/landing1.css'
import { AppStatusBar } from './App-status-bar'
import { Bottom } from './Bottom'
import { BottomNavBar } from './Bottom-nav-bar'
import { Navbar } from './Navbar'
import { useState } from 'react'
import { Sidebar } from './Sidebar'

export function Landing1() {

    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(true)
    const hideSidebar = () => setSidebar(false)


    return (
        <>
        <div className="lpage_maindiv">
            <div>
                <Navbar props={hideSidebar}/>
            </div>

            <div>
                <AppStatusBar props={showSidebar}/>
            </div>

            <div onClick={hideSidebar}>
                <img id="img_one" src="./landing_images/one.png" alt="" />
                <img id="img_two" src="./landing_images/two.png" alt="" />
                <img id="img_three" src="./landing_images/three.png" alt="" />
                <img id="img_four" src="./landing_images/four.png" alt="" />
                <img id="img_five" src="./landing_images/five.png" alt="" />
                <img id="img_six" src="./landing_images/six.png" alt="" />
                <img id="img_seven" src="./landing_images/seven.png" alt="" />
                <img id="img_eight" src="./landing_images/freepik.png" alt="" />
                <img id="img_nine" src="./landing_images/Ellipse.png" alt="" />
            </div>

            <div>
                <BottomNavBar props={hideSidebar}/>
            </div>

            <div>
                <Bottom/>
            </div>
            <Sidebar prop={sidebar}/>
        </div>
        </>
    )
}