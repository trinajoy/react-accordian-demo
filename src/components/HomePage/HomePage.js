import React from "react";
import "./HomePage.css";
import Accordian from "../Accordian/Accordian";
import SideBar from "../SideBar/SideBar";
import copy from "../copy";
// import Media from "react-media";

function HomePage() {
  return (
    <div className="home-bg">
      <div className="side-content">
        <SideBar />
      </div>

      <div className="accordian-container">
        {copy.map((element) => (
          <Accordian key={element.id} title={element.title} content={element.content} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
