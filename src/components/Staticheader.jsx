import { useEffect, useState } from "react";
import "../styles/staticHeader.css";

export const StaticHeader = () => {

  let time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const [ctime, setCTime] = useState(time);
  const Updatetime = () => {
    time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', });
    setCTime(time)
  }
  setInterval(Updatetime, 1000)


  return (
    <>
      <div className="headerBox">
        <p id="time">{ctime}</p>
        <img id="wifi" src="/wifi.jpg" alt="alt"></img>
        <img id="tower" src="/tower.jpg" alt="alt"></img>
        <img id="battery" src="/battery.jpg" alt="alt"></img>
      </div>
    </>
  );
};
