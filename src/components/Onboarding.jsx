import styled from 'styled-components'
import '../styles/onboarding.css'
import { StaticHeader } from './Staticheader'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

const Div = styled.div`
    position: absolute;
    width:300px;
    height:300px;
    border-radius: 50%;
    background: #DBD5F5;
    top :214px;
    left:50px;
`;

export const Onboarding = () =>{

    const history = useHistory();

    useEffect(()=>{
        setTimeout(()=>{
            history.push("/welcome");
        },3000)
    },[])

    return <>
    <div id="onboarding">
    <StaticHeader />
    <Div id="outer">
        <div id="lavender">
            <div id="blue">
                <img id="blueaura" src = "BlueAura.svg" alt="My Happy SVG"/>
            </div>
        </div>
    </Div>
    </div>
   
    </>
}

