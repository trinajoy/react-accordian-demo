import React from "react";
import "./Pagination.css";
import ChevronLeft from "../Chevron/ChevronLeft";
import ChevronRight from "../Chevron/ChevronRight";

function Pagination() {
  return (
    <div className="arrow-container">
      <div className="chevron-left">
        <ChevronLeft width={10} fill={"#000"} />
        <p> BACK </p>
      </div>
      <div className="chevron-right">
        <ChevronRight width={10} fill={"#000"} />
        <p> NEXT </p>
      </div>
    </div>
  );
}

export default Pagination;
