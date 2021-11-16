import { useParams } from 'react-router'
import '../styles/doctors.css'
import { StaticHeader } from './Staticheader'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Heading } from './Heading';
import { Bottom } from './Bottom';
import { FaStar } from "react-icons/fa"
import { Skip } from './Skip';
import styled from 'styled-components'


const Button = styled.button`
    position: static;
    width:84px;
    height:33px;
    border-radius: 30px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    cursor:pointer;
    transition: all 0.2s ease-in;
`;

export const Doctors = () => {

    const obj = useParams();
    const [doclist, setDocList] = useState([])
    const [category, setCategory] = useState("")

    console.log(obj.id)

    useEffect(() => {
        fetchDoctors()
        fetchCatgory()
    }, [])

    const fetchDoctors = () => {
        axios
            .get(`http://localhost:7765/doctors/category/${obj.id}`, { withCredentials: true })
            .then(res => {
                console.log("data", res.data.doctor)
                setDocList(res.data.doctor)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    const fetchCatgory = () => {
        axios
            .get(`http://localhost:7765/categories/${obj.id}`, { withCredentials: true })
            .then(res => {
                // console.log("data", res.data.category.categoryname)
                setCategory(res.data.category.categoryname)
            })
            .catch(err => {
                console.log("Error", err);
            })
    }

    return (
        <div id="doctorspage">
            <StaticHeader></StaticHeader>
            <Heading image="/leftarrow.png" heading={category} route={"/therapy"} />

            <div id="mainDiv">
                {
                    doclist.map((e) => (
                        <div id="docDiv">
                            <div id="div1">
                                <img id="docimage" src={e.photo}></img>
                                <p id="docname">Dr.{e.name}</p>
                                <p className="docDetails">{e.profession}</p>
                            </div>
                            <div id="div2">

                                <p className="docDetails"><strong>SPECIALIST - </strong>{e.specialization.map((item) => item.categoryname).join(", ")}</p>
                                <p className="docDetails"><strong>QUALIFICATION - </strong>{e.qualification}</p>

                                <div id="stars">
                                    {[...Array(e.ratings)].map((star) => {
                                        return <FaStar style={{ color: '#FCF492' }} />
                                    })}
                                    {[...Array(5 - e.ratings)].map((star) => {
                                        return <FaStar style={{ color: '#D8DADC' }} />
                                    })}
                                </div>

                                <div id="docbuttons">
                                    <Link to={`/individualdoctor/${e._id}`}>
                                        <Button id="details">Details</Button>
                                    </Link>
                                    <Link to={`/booking/${e._id}`}>
                                        <Button id="books">Book</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div id="docbottom">
                <hr id="docbottom1" />
            </div>
        </div>
    )

}