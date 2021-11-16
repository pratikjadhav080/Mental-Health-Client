import '../styles/landing.css'
import '../styles/allset.css'
import { StaticHeader } from './Staticheader'
import { Bottom } from './Bottom'
import { useEffect, useState } from 'react'
import { Link,useHistory } from 'react-router-dom'

export const Allsettogo = () => {

    const history = useHistory();
    const [nextPage,setNextPage] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            history.push("/landingpage");
        },3000)
    },[])

    return <>
        <div id="allset">
            <StaticHeader />
            <p id="allsetp">Great! <br />You are all set to go now.</p>
            <Bottom />
            {nextPage?<Link to="/landingpage"></Link>:""}
        </div>
    </>
}