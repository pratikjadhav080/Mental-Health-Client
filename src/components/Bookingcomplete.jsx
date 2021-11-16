import "../styles/Bookingcomplete.css";
import { Bottom } from "./Bottom";
import { StaticHeader } from "./Staticheader";
import { Skip } from './Skip'
import { Link } from 'react-router-dom'
import { Heading } from "./Heading";
import axios from 'axios';
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"


export const Bookingcomplete = () => {

  const [appointment,setAppointment] = useState({})
  const [specificdoctor,setDoctor] = useState({})

  const bookingData = JSON.parse(localStorage.getItem("bookData"))

  useEffect(()=>{
      axios.post("http://localhost:7765/appointments", bookingData)
      .then(res => {
        console.log(res);
        console.log(res.data);
        setAppointment(res.data.appointment)
        setDoctor(res.data.doctor)
      })
  },[])

  return (
    <>
      <div id="BookingOutterBox">
        <StaticHeader></StaticHeader>
        <Heading image="leftArrowdoc1.jpg" heading="BOOKING COMPLETE" route={`/landingpage`}></Heading>
        <div>
          <img id="Booking-doc-image" src={specificdoctor.photo} alt="doctor image" />
        </div>
        <p id="Booking-doc-name">{specificdoctor.name}</p>
        <p id="Booking-doc-category">{specificdoctor.profession}</p>

        <div id="starsbooking">
          {specificdoctor.ratings ? [...Array(specificdoctor.ratings)].map((star) => {
            return <FaStar style={{ color: '#FCF492', height: "20px", width: "18px" }} />
          }) : ""}
          {specificdoctor.ratings ? [...Array(5 - specificdoctor.ratings)].map((star) => {
            return <FaStar style={{ color: '#D8DADC', height: "20px", width: "18px" }} />
          }) : ""}
        </div>

        <p className="Booking-doctor" id="bookingSpec"><strong>SPECIALIST - </strong>{specificdoctor.specialization ? specificdoctor.specialization.map((item) => item.categoryname).join(", ") : ""}</p>
        <p className="Booking-doctor" id="bookingQ"><strong>QUALIFICATION - </strong>{specificdoctor.qualification}</p>
        <h3 id="Booking-doc-contact" >SESSION TYPE - {appointment.sessiontype}</h3>
        <h3 id="Booking-Session-Date">SESSION DATE - {appointment.date} </h3>
        <h3 id="Booking-Time">SESSION TIME - {appointment.time}</h3>
        <h2 id="Booking-Total" >TOTAL AMOUNT PAID</h2>
        <h2 id="Booking-Total-value">Rs {appointment.sessiontype === "CHAT" ? 399 : 599}</h2>
        <Link to="/landingpage">
          <Skip prop="Back to homepage" />
        </Link>
        <Bottom />
      </div>
    </>
  );
};


{/* <div id="Booking-doc-image">
<img src={specificdoctor.photo} alt="doctor image" />     
</div>

 <h4 id="Booking-doc-name">{specificdoctor.name}</h4>
 <h5 id="Booking-doc-category">{specificdoctor.profession}</h5>
 <h3 id="Booking-doc-specialist">SPECIALIST - {specificdoctor.specialization ? specificdoctor.specialization.map((item) => item.categoryname).join(", ") : ""}</h3>
 <h3 id="Booking-doc-qualification">QUALIFICATION - {specificdoctor.qualification}</h3>
 <h3 id="Booking-doc-contact" >SESSION TYPE - {appointment.sessiontype}</h3>
 <h3 id="Booking-Session-Date">SESSION DATE - {appointment.date} </h3>
 <h3 id="Booking-Time">SESSION TIME - {appointment.time}</h3>

 <h2 id="Booking-Total" >TOTAL AMOUNT PAID</h2>
 <h2  id="Booking-Total-value">Rs {appointment.sessiontype==="CHAT"?399:599}</h2> */}