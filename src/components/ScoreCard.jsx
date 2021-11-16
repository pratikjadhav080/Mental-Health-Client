import "../styles/ScoreCard.css"
import { StaticHeader } from './Staticheader'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const ScoreCard = () => {

    let x = +localStorage.getItem("games_count");
    const history = useHistory();

    const [name, setName] = useState("")

    useEffect(() => {
        const loggeduser = JSON.parse(localStorage.getItem("data"))
        setName(loggeduser.user.name)
        nextPage()
    }, [])


    const nextPage = () =>{
        setTimeout(()=>{
            history.push("/daily-task-page");
        },3000)
    }

    return x === 2 ? (<>
        <div id="cardOuterBox">
            <StaticHeader></StaticHeader>
            <h3 id="cardHeading"> Amazing {name}!</h3>
            <img src="winner.jpg" id="cardwinner" alt="cardwinner" />
            <h3 id="cardEarn">You have earned</h3>
            <h2 id="cardPoint"> 350 pts</h2>
        </div>
    </>)


        : (
            <>
                <div id="cardOuterBoxLosing">
                    <StaticHeader></StaticHeader>
                    <h3 id="cardHeadingLosing"> Good work {name}!</h3>
                    <img src="looser.png" id="cardLosing" />
                    <h3 id="MoreFocus">But you need to focus more.</h3>
                    <h2 id="TryAgain">TRY AGAIN</h2>
                    <h3 id="ToUnlock">To unlock level 2</h3>
                </div>
            </>
        )



}