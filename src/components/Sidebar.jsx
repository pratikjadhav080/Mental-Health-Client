import { SiderbarData } from './SidebarData'
import {Link} from 'react-router-dom'
import '../styles/landing.css'
import { useEffect, useState } from 'react'

export const Sidebar= ({prop,username})=>{

    const profile = localStorage.getItem("avatar")
   
    const [avatar,setAvatar] = useState("")

    useEffect(()=>{
        setAvatar(profile)
    },[])

    return(
        <>
            <nav className={prop ? 'nav-menu active' : 'nav-menu'}>

                <img id="girlprofile" src={avatar==="girl"?"girlprofile.jpg":"boy.jpg"} alt="alt"/>
                <p id="profilename">{username?username.split(" ")[0]:"Dummy name"}</p>
                <ul className='nav-menu-items'>
                    {SiderbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <img src={item.icon} alt={item.icon}></img>
                                    <span id="spantag">{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}