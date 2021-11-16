import { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import { StaticHeader } from "./Staticheader";
import { BottomNavBar } from "../components/Bottom-nav-bar";
import { Bottom } from "../components/Bottom";
import "../styles/meditate-carousel.css";
import { Link } from "react-router-dom";
import { Heading } from "./Heading";

const items = [
  {
    source: "forestman.png",
    title: "Greenery everywhere",
    desc: "The greenery around gives peace of mind and calmness.",
  },
  {
    source: "soothingwaterfall.png",
    title: "The soothing waterfall scene",
    desc: "Being around in nature makes yo feel good naturally. It helps you keep your mind and self calm.",
  },
  {
    source: "flowerland.png",
    title: "Flowers that seems pretty",
    desc: "The fragnance and liik of beautiful flowers make u feel happy.",
  },
];

function Vrinsitu() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const carouselRef = useRef();

  return (
    <div id="meditate-crousel-cont">
      <StaticHeader></StaticHeader>
      <Heading image={"leftarrow.png"} heading={"VR-INSITU"} route={"/meditate"}/>

      <Link to="/naturevideo">
      <Carousel
        ref={carouselRef}
        itemsToShow={1}
        showArrows={false}
        pagination={false}
        onChange={(currentItem) => setActiveItemIndex(currentItem.index)}
      >
        {items.map((item, i) => (
          <div key={i} className="slider-div">
            <img src={item.source} alt="splash" width="90%" />
            <div className="slider-title">{item.title}</div>
            <div className="slider-description">{item.desc}</div>
          </div>
        ))}
      </Carousel>
      </Link>
      <BottomNavBar />
      <Bottom />
    </div>
  );
}
export { Vrinsitu };
