import { Link } from "react-router-dom"
import "../styles/heading.css"

function Heading({image,heading,route}){
    return (
   
        <div id="heading-div">
        <button>
        <Link to={route}>
          <img src={image} />
          </Link>
        </button>
        <div>{heading}</div>
      </div>
     
    )
   
}
export {Heading}