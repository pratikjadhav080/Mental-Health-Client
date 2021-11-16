import "../styles/welcome.css"
import {useState} from "react";
import { StaticHeader } from './Staticheader'
import {Link} from 'react-router-dom'

function Welcome (){
    const [count,setCount] = useState(1);
    console.log(count)

    return  count === 1  ?(
        <div className="cont"> 
        <StaticHeader/>
        <div className="img-div">
        <img src="welcome.png" alt="welcome"/> 
        </div>
        <h1 className="welcome">Welcome</h1>
        <div className="bottom-box">
         <div className="text">“Bring in the spirituality and positivity in you with Blue aura.”</div>
         <div className="button-cont">
           <div>
         <button className="skip" onClick={()=>setCount(count+1)}>Skip</button>
         </div>
         <div className="dot-icon">
          <div id="first-dot"></div><div></div><div></div>
          </div>
          <div>
          <button className="next" onClick={()=>setCount(count+1)}>Next</button>
          </div>
         </div>  
        </div>
        <div className="bottom-line"><div></div></div>
        </div>
       
    ): count===2 ? ( <div className="cont">  
     <StaticHeader/>
    <div  className="img-div">
    <img src="self-love.png" alt="self"/> 
    </div>
    <h1 className="welcome">Self-Love</h1>
    <div className="bottom-box">
     <div className="text">“Meditation helps to love with self and around too.”</div>
     <div className="button-cont">
       <div>
     <button className="skip" onClick={()=>setCount(count+1)}>Skip</button>
     </div>
     <div className="dot-icon">
      <div></div><div id="second-dot"></div><div></div>
      </div>
      <div>
      <button className="next" onClick={()=>setCount(count+1)} >Next</button>
      </div>
     </div>  
    </div>
    <div className="bottom-line"><div></div></div>
    </div>
    ):(
        <div className="cont"> 
         <StaticHeader/> 
        <div  className="img-div">
        <img src="meditate.png" alt="meditate"/> 
        </div>
        <h1 className="welcome">Play & Meditate</h1>
        <div className="bottom-box">
         <div className="text">“Easy cognitive games that will help you work on you mind positively.” </div>
         <div className="button-cont">
         <Link to="/signup">
           <div>
         <button className="skip"  >Skip</button>
         </div>
         </Link>
         <div className="dot-icon">
          <div></div><div></div><div id="third-dot"></div>
          </div>
          <Link to="/signup">
          <div>
        <button className="next" onClick={()=>setCount(count+1)} >Next</button>
          </div>
          </Link>
         </div>  
        </div>
        <div className="bottom-line"><div></div></div>
        </div> 
    )
}

export {Welcome}