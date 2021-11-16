import { StaticHeader } from "./Staticheader";
import "../styles/therapy.css";
import styled from "styled-components";
import { Bottom } from "./Bottom";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Heading } from "./Heading";

const Button = styled.button`
  position: absolute;
  left: 24px;
  height: 82px;
  width: 359px;
  border-radius: 8px;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  color: #37474f;
  border: 0px;
  transition: all 0.2s ease-in;
  cursor:pointer;

  &:active{
    border: 1px solid #656B75;
  }
`;

const Therapies = () =>{

  const [btns,setbtns] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = () => {
    axios
      .get("http://localhost:7765/categories", { withCredentials: true })
      .then(res => {
        console.log("data", res.data.categories)
        setbtns(res.data.categories)
      })
      .catch(err => {
        console.log("Error", err);
      })
  }

  return (
    <div id="dfcategory-cont">

      <StaticHeader></StaticHeader>
      <Heading image={"leftarrow.png"} heading={"THERAPY"} route={"/landingpage"}/>

      <p id="concern">What is your concern?</p>

      {btns.map((e,index) => (
        <Link to={`/doctors/${e._id}`}>
          <Button key={index} className={e.categoryname.toLowerCase()}>{e.categoryname}</Button>
        </Link>
      ))}

      <Bottom />
      
    </div>
  );
}

export { Therapies };
