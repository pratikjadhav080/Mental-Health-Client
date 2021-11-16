import { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import { StaticHeader } from "./Staticheader";
import { BottomNavBar } from "../components/Bottom-nav-bar";
import { Bottom } from "../components/Bottom";
import "../styles/meditate-carousel.css";
import { Heading } from "./Heading";
import { Link } from "react-router-dom";

const items = [
  {
    source: "/quickness.png",
    title: "How quick are you?",
    desc: "This game will test your information processing, the initial identification and analysis of incoming sensory input.",
  },
  {
    source: "/attention.png",
    title: "How you filter information?",
    desc: "Attention span is the time to give your brain concentration on a task. This game will help you know your concentration ability.",
  },
  {
    source: "/memory.png",
    title: "Let’s check your memory power.",
    desc: "This game is to test your memory power and help increase your ability to remember things",
  },
];

function GamesCrousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const carouselRef = useRef();

  return (
    <div id="meditate-crousel-cont">
      <StaticHeader></StaticHeader>
      <Heading heading={"GAMES"} image={"leftarrow.png"} route={"/games-home"}/>

      <Link to ="/games-play">
      <Carousel
        ref={carouselRef}
        itemsToShow={1}
        showArrows={false}
        pagination={false}
        // enableAutoPlay autoPlaySpeed={1500}
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
export { GamesCrousel };
