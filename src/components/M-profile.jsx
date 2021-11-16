import '../styles/landing.css'
import '../styles/m-profile.css'
import { StaticHeader } from './Staticheader'
import { Bottom } from './Bottom'
import { Heading } from "./Heading";
import axios from 'axios';
import { useEffect, useState } from 'react';

export function Mprofile() {

    const [doctorName, setdoctorName] = useState("")
    const [profession, setprofession] = useState("")
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    const [noUpcoming, setNoUpcoming] = useState(true)

    let data = JSON.parse(localStorage.getItem("data"))

    useEffect(() => {
        axios
            .get(`http://localhost:7765/appointments/user/${data.user._id}`, { withCredentials: true })
            .then(res => {

                if (!res.data.coming) {
                    setNoUpcoming(false)
                } else {
                    console.log("data", res.data.coming.doctorid)
                    setdoctorName(res.data.coming.doctorid.name)
                    setprofession(res.data.coming.doctorid.profession)
                    setdate(res.data.coming.date)
                    settime(res.data.coming.time)
                }

            })
            .catch(err => {
                console.log("Error", err);
            })
    }, [])

    return (
        <>
            <div className="lpage_maindiv">
                <StaticHeader />
                <Heading image="leftArrowdoc1.jpg" heading="MY PROFILE" route={`/landingpage`}></Heading>

                <div id="m-profile2">
                    <div id="m-pro3">NAME - {data.user.name}</div>
                    <div id="m-pro4">PHONE No. - 9876543210</div>
                    <div id="m-pro5">EMAIL - {data.user.email}</div>
                    <img id="m-pro8" src="edit.png" alt="" />
                </div>

                <div id="m-profile3">
                    <div id="m-pro9">Therapist appointments</div>
                </div>

                {noUpcoming ? <>
                    <div id="m-profile4">Upcoming</div>

                    <div id="m-profile5">
                        <div id="m-pro10">Dr. {doctorName}, {profession}</div>
                        <div id="m-pro11">{date},</div>
                        <div id="m-pro12">{time}</div>
                        <div id="m-pro13">
                            <div id="m-pro14">Join the session</div>
                        </div>
                    </div>
                </> : <h1 id="noappointment">No Appointments</h1>

                }


                <Bottom />
            </div>
        </>
    )
}