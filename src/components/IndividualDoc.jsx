import { useParams } from 'react-router'
import '../styles/individualdoc.css'
import { StaticHeader } from './Staticheader'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Heading } from "./Heading";
import { FaStar } from "react-icons/fa"
import {Bottom} from './Bottom'
import { Link } from 'react-router-dom'

export const Individualdoctor = () => {

    const obj = useParams();
    const [doc, setDoc] = useState({})

    console.log(obj.id)

    useEffect(() => {
        fetchDoctor()
    }, [])

    const fetchDoctor = () => {
        axios
            .get(`http://localhost:7765/doctors/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data.doctor)
                setDoc(res.data.doctor)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return (
        <>
            <div id="docDetailBox">
                <StaticHeader />
                <Heading image="/leftArrowdoc1.jpg" heading="THERAPIST" route={"/therapy"}></Heading>

                <img src={doc.photo} id="docDetailImg" />
                <p id="docName">{doc.name}</p>
                <p id="docQualification">{doc.profession}, {doc.qualification}</p>

                <div id="starsind">
                    {doc.ratings?[...Array(doc.ratings)].map((star) => {
                        return <FaStar style={{ color: '#FCF492',height:"33px",width: "33px"}} />
                    }):""}
                    {doc.ratings?[...Array(5 - doc.ratings)].map((star) => {
                        return <FaStar style={{ color: '#D8DADC',height:"33px",width: "33px"}} />
                    }):""}
                </div>

                <p id="docSpecialisation">Specialisation</p>
                <p id="docCategory">{doc.specialization ? doc.specialization.map((item) => item.categoryname).join(", ") : ""}</p>

                <p id="docIntroduction">Introduction</p>
                <p id="docIntroParagraph">
                    I am a {doc.profession} who has specialisation
                    in clinical population. I have experinece working with children,
                    adolesence and adults. I love to guide people in stressful times as I
                    believe it’s my duty and responsibility towards mankind. I love to
                    read self help books and I am an aspiring motivational coach.
                </p>

                <Link to={`/booking/${doc._id}`}>
                    <button id="docBook">Book</button>
                </Link>
            </div>
            <Bottom></Bottom>
        </>
    )

}