import React from "react";
import "./HomePage.css";
import Accordian from "../Accordian/Accordian";
import Pagination from "../Pagination/Pagination";
import SideBar from "../SideBar/SideBar";
import copy from "../copy";

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
      <div className="pagination-container">
        <Pagination />
      </div>
    </div>
  );
}

export default HomePage;
