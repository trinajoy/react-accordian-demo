import React from "react";
import "./HomePage.css";
import Accordian from "../Accordian/Accordian";
import copy from "../copy";

function HomePage() {
  return (
    <div id="home" className="home-bg">
      {copy.map((element) => (
        <Accordian key={element.id} title={element.title} content={element.content} />
      ))}
    </div>
  );
}

export default HomePage;
