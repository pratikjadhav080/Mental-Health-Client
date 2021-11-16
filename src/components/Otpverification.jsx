import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/otp-verification.css";
import { Bottom } from "./Bottom";
import { Heading } from "./Heading";
import { StaticHeader } from "./Staticheader";

function Otpverification() {
  const arr = [1, 2, 3, 4];

  const Input = styled.input`
    position: absolute;
    width: 56px;
    height: 56px;
    top: 225px;
    border: 1px solid #c4c4c4;
    color: #656b75;
    font-family: "Poppins";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    text-align: center;
    border-radius: 4px;
  `;
  return (
    <div id="otp-cont">
      <StaticHeader />
      <Heading image={"leftarrow.png"} heading={"CARD PAYMENT"} route={`/cardpayment`}/>
      <div className="verification">Verfication</div>
      <div id="enter-otp">Enter OTP</div>
      {arr.map((item)=>(
          <Input id={`otpinput${item}`} type="number" value={Math.floor(Math.random() * 10)}/>
      ))}
      <img src="otp.png" id="otp-image" />
      <Bottom />

      <Link to="/processing">
      <button id="otp-btn">Verify OTP</button>
      </Link>
    </div>
  );
}

export { Otpverification };
