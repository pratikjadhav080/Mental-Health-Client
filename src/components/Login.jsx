import '../styles/login.css'
import axios from 'axios';
import { StaticHeader } from './Staticheader'
import { useEffect, useState } from 'react';
import { Link,useHistory } from 'react-router-dom'
import styled from "styled-components";

const Button = styled.input`
    position: absolute;
    width: 362px;
    height: 54px;
    left:24px;
    top:498px;
    padding: 12px 85px;
    background: #A28EFC;
    color: #FFFFFF;
    border-radius: 30px;
    font-family: 'Poppins';
    font-style: normal; 
    font-weight: bold;
    font-size: 17px;
    line-height: 30px;
    text-align: center;
    border:none;
    cursor: pointer;
    transition: all 0.4s ease-in;

    &:active {
        background: #534883;
    }
`;


export const Login = () => {

    const history = useHistory();
    const [signuperror,setSignUpError] = useState(false)

    useEffect(()=>{
        localStorage.clear();
    },[])

    const [userData,setUserData] = useState({
        email:"",
        password:""
    })

    const handlechange = (e) =>{

        const {name,value} = e.target;
        setUserData({
            ...userData,
            [name]:value,
        })
    }

    const emptyData = () =>{
        setUserData({
            email:"",
            password:""
        })

    }

    const normalSignUp = (e) => {

        e.preventDefault()

        if(!userData.email || !userData.password){
            return
        }

        axios.post("http://localhost:7765/login", userData)
            .then(res => {
                setSignUpError(false)
                emptyData()
                console.log(res);
                console.log(res.data);
                localStorage.setItem('data', JSON.stringify(res.data));
                localStorage.setItem("loginMethod","Normallogin")
                history.push("/blueaura");
            }).catch(function(e) {
                setSignUpError(true)
                emptyData()
                console.error("e",e.response);
            })
    }

    const googleAuth = () => {
        localStorage.setItem("loginMethod","Fastlogin")
        window.open('http://localhost:7765/auth/google','_self');
        
    }

    const facebookAuth = () => {
        localStorage.setItem("loginMethod","Fastlogin")
        window.open('http://localhost:7765/auth/facebook/','_self');
    }

    return (
        <>
            <div id="login">

                <StaticHeader />

                {signuperror?<p className="loginP" id="invalid">Invalid email or password</p>:""}

                <div><img id="logo" src="blueaura.png" alt="leftarrow"></img></div>

                <form onSubmit={normalSignUp} id="form">
                    <input value={userData.email} name="email" onChange={handlechange} className="fields" type="email" placeholder="E-mail" />
                    <input value={userData.password} name="password" onChange={handlechange} id="passwordfield" style={{ backgroundImage: "url('eyebrow.svg')" }} className="fields" type="password" placeholder="Password (8+ CHARACTERS)" />
                    <Button type="submit" value="Login to account" />
                </form>

                <div>
                    <p className="loginP" id="newapp">New to app?</p>
                    <Link to="/signup">
                    <p className="loginP" id="Signuproute">Sign up</p>
                    </Link>
                    
                </div>

                <button id="facebook" onClick={facebookAuth}><img src="facebook.jpg" alt="facebook"></img>Sign up with facebook</button>
                <button id="google" onClick={googleAuth}><img src="google.jpg" alt="google"></img>Sign up with Google</button>
            
            </div>
        </>
    )

}