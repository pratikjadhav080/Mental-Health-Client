import { useHistory, useParams } from 'react-router'
import '../styles/bookingpage.css'
import { StaticHeader } from './Staticheader'
import axios from 'axios';
import { useState } from 'react';
import { Heading } from './Heading';
import { Bottom } from './Bottom'

export const Book = () => {

    const history = useHistory();
    const { user } = JSON.parse(localStorage.getItem("data"))

    const obj = useParams();
    const [slots, setSlots] = useState([])
    const [bookData, SetbookData] = useState({
        userid: user._id,
        doctorid: obj.id,
        time: "",
        date: "",
        sessiontype: ""
    })

    const [personal, setPersonal] = useState({
        phone: "",
        email: ""
    })

    console.log(obj.id)

    const selecteDate = (e) => {

        const { name, value } = e.target;

        SetbookData({
            ...bookData,
            [name]: value
        })

        console.log(name, value)

        axios
            .get(`http://localhost:7765/appointments/searchappointment/${e.target.value}/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data)
                setSlots(res.data.filteredslots)
            })
            .catch(err => {
                console.log("Error", err);
            })

    }

    const handleChange = (e) => {

        const { name, value } = e.target;

        SetbookData({
            ...bookData,
            [name]: value
        })

        console.log(name, value)
    }

    const handlePersonalDetails = (e) => {

        const { name, value } = e.target;

        setPersonal({
            ...personal,
            [name]: value
        })

        console.log(name, value)
    }

    const sendData = (e) => {
        e.preventDefault()
        console.log(bookData)
        localStorage.setItem("bookData", JSON.stringify(bookData))
        localStorage.setItem("personal", JSON.stringify(personal))
        history.push("/therapistappointment");
    }

    return (
        <>
            <div id="bookpage">
                <StaticHeader />
                <Heading image="/leftarrow.png" heading="BOOK" route={`/individualdoctor/${obj.id}`} />
                <p id="pbooking">How should we book?</p>
                <p id="pinstruction">Video consultation require good bandwith internet connection on your phone for an uinterrupted session. Please prefer chat/phone call consultation from the below otherwise.</p>
                <p id="pnote">Note- Time slot are displayed in Asia / Kolkata zone</p>
                <p id="bookingdate">Select Date  </p>
                <p id="bookingtime">Select Time  </p>
                <p id="userphone">Enter Phone no </p>
                <p id="useremail">Enter Email Id </p>
                <img src="/dates.png" id="calenderimg"></img>
                <img src="/rightTime.png" id="timeimage"></img>

                <form id="formdata" onSubmit={sendData}>

                    <input onChange={selecteDate} type="date" name="date" id="bookingdateinput" /><br />

                    <div>
                        <input onChange={handleChange} type="radio" id="chat" name="sessiontype" value="CHAT" />
                        <label id="chatlabel" for="chat">Chat Consultation - Rs 399</label>
                    </div>
                    <div>
                        <input onChange={handleChange} type="radio" id="video" name="sessiontype" value="VIDEO" />
                        <label id="videolabel" for="video">Video Consultation - Rs 599</label>
                    </div>

                    <select name="time" id="bookingtimeinput" onChange={handleChange}>
                        <option value="">Time</option>
                        {slots.map((e, index) => (
                            <option key={index} value={e}>{e}</option>
                        ))}
                    </select>

                    <input id="bookingphoneinput" type="text" name="phone" onChange={handlePersonalDetails} placeholder="+91" />
                    <input id="bookingemailinput" type="email" name="email" onChange={handlePersonalDetails} placeholder="E-mail" />

                    <input id="proceedbtn" type="submit" value="Proceed" /><br />

                </form>

                <div id="bookingbottom">
                    <hr id="bookingbottom1" />
                </div>
            </div>

        </>
    )

}