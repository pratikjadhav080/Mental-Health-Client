import '../styles/signup.css'
import axios from 'axios';
import { StaticHeader } from './Staticheader'
import { useState } from 'react';
import styled from "styled-components";
import { Link, useHistory } from 'react-router-dom'

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


export const Signup = () => {

    const history = useHistory();
    const [signuperror,setSignUpError] = useState(false)

    const [userData,setUserData] = useState({
        name:"",
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
            name:"",
            email:"",
            password:""
        })

    }

    const normalSignUp = (e) => {

        e.preventDefault()

        if(!userData.name || !userData.email || !userData.password){
            return
        }

        console.log(userData)


        axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, userData)
            .then(res => {
                setSignUpError(false)
                emptyData()
                console.log(res);
                console.log(res.data);
                history.push("/login");
            }).catch(function(e) {
                setSignUpError(true)
                emptyData()
                console.error("e",e.response); 
            })
    }



    const googleAuth = () => {
        localStorage.setItem("loginMethod","Fastlogin")
        window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/google`,'_self');
    }
//${process.env.REACT_APP_BACKEND_URL}/auth/google
//${process.env.REACT_APP_BACKEND_URL}/auth/google
    const facebookAuth = () => {
        localStorage.setItem("loginMethod","Fastlogin")
        window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/facebook/`,'_self');
    }

    return (
        <>
            <div id="signup">

                <StaticHeader />

                {signuperror?<p className="commonp" id="alreadySignup">Already registered, please go to login</p>:""}


                <div><img id="signlogo" src="blueaura.png" alt="alt"></img></div>

                <form onSubmit={normalSignUp} id="signform">
                    <input value={userData.name} name="name" onChange={handlechange} className="signfields" type="text" placeholder="Name" />
                    <input value={userData.email} name="email" onChange={handlechange} className="signfields" type="email" placeholder="E-mail" />
                    <input value={userData.password} name="password" onChange={handlechange} id="signpasswordfield" style={{ backgroundImage: "url('eyebrow.svg')" }} className="signfields" type="password" placeholder="Password (4+ CHARACTERS)" />
                    <Button type="submit" value="Create an account" />
                </form>

                <div>
                    <p className="commonp" id="member">Already a member?</p>
                    <Link to="/login">
                    <p className="commonp" id="Login">Login</p>
                    </Link>
                </div>

                <button id="facebook" onClick={facebookAuth}><img src="facebook.jpg" alt="alt"></img>Sign up with facebook</button>
                <button id="google" onClick={googleAuth}><img src="google.jpg" alt="alt"></img>Sign up with Google</button>
    
            </div>
        </>
    )

}