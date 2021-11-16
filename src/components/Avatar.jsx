import { useHistory } from 'react-router-dom'
import '../styles/avatar.css'
import { StaticHeader } from './Staticheader'

export const Avatar = () => {

    const history = useHistory();

    const selectAvatar = (a) =>{

        a?localStorage.setItem("avatar","girl"):localStorage.setItem("avatar","boy")
        
        history.push("/allset");
    }

    return (
        <>
            <div id="avatar">
                <StaticHeader />
                <p id="choose">Choose your avatar</p>
                <img id="boy" onClick={()=>selectAvatar(0)} src="boy.jpg" alt="boy"></img>
                <img id="girl" onClick={()=>selectAvatar(1)} src="girl.jpg" alt="girl"></img>
                <p id="male">Male</p>
                <p id="female">Female</p>
            </div>
        </>
    )

}