import { Heading } from "./Heading";
import { StaticHeader } from "./Staticheader";
import "../styles/cardpayment.css";
import { Bottom } from "./Bottom";
import { useState } from "react";
import { useHistory } from "react-router";


function Cardpayment() {

  const history = useHistory();
  const { sessiontype } = JSON.parse(localStorage.getItem("bookData"))
   
  const [formdata,setformData] = useState({
                cardnumber:"",
                holdername:"",
                    expiry:"",
                       cvv:"",            
  })

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setformData({...formdata,[name]:value})
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(formdata)
      //do validation here
      history.push("/otppage");
  }

  return (
    <div id="card-payment-cont">
      <StaticHeader />
      <Heading image={"leftarrow.png"} heading={"CARD PAYMENT"} route={`/therapistappointment`}/>
      <div id="total-payment-mode">TOTAL PAYMENT MODE</div>
      <div>{sessiontype==="VIDEO"?"RS 599":"RS 399"}</div>
      <div id="add-new-card">ADD NEW CARD</div>

      <form id="payment-form" onSubmit={handleSubmit}>
        <label className="card-number">Card Number</label>
        <input type="text" placeholder="16 digit-Card number" className="card-number-input"
        name="cardnumber" value={formdata.cardnumber} onChange={handleChange}/>

        <label className="card-holder-name">Card Holders Name</label>
        <input type="text" placeholder="Card Holders Name" className="card-holder-name-input" 
        name="holdername" value={formdata.holdername} onChange={handleChange}/>

        <label id="expiry">Expiry</label>
        <input type="text" placeholder="Expiry-date"  id="expiry-date-input" 
         name="expiry" value={formdata.expiry} onChange={handleChange}/>

        <label id="cvv">CVV</label>
        <input type="password" placeholder="CVV" id="cvv-input" 
        name="cvv" value={formdata.cvv} onChange={handleChange}/>

        <input type="submit" value={sessiontype==="VIDEO"?"RS 599":"RS 399"}/>
      </form>

      <Bottom />
    </div>
  );
}

export { Cardpayment };
