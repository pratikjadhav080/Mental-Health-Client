
import '../styles/landing.css'

export function AppStatusBar({props}) {

    const hamburgerclick = () =>{
        props()
    }

    return (
        <>
            <div className="lpage_app_status">
                <img onClick={hamburgerclick} className="slide" src="./landing_images/slide.png" alt="" />
                <img className="bell" src="./landing_images/bell.png" alt="" />
            </div>
        </>
    )
}