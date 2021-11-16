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
    source: "virtualreality.png",
    title: "Meditate with VR",
    desc: "Helping you deal with real world situations with VR and make you feel it for real at our space.",
  },
  {
    source: "listeningmusic.png",
    title: "Sound that heals your mind.",
    desc: "The sound therapy revive your mood and positive vibes in you.",
  },
  {
    source: "yog.png",
    title: "Embrace yourself with yog",
    desc: "Yoga helps you release all the tension and bring in eepositive energy in you.",
  },
];

function MeditateCrousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const carouselRef = useRef();

  return (
    <div id="meditate-crousel-cont">
      <StaticHeader></StaticHeader>
      <Heading heading={"MEDITATE"} image={"leftarrow.png"} route={"/meditate-home"}/>

      <Link to="/vr-insitu">
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
export { MeditateCrousel };
