import React, {useState, useRef} from "react";
import "./Accordian.css";
import Chevron from "../Chevron";

function Accordian(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordian__icon");

  const content = useRef(null);

  function toggleAccordian() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    setRotateState(setActive === "active" ? "accordian__icon" : "accordian__icon rotate");
  }

  return (
    <div className="accordian__section">
      <button className={`accordian ${setActive}`} onClick={toggleAccordian}>
        <p className="accordian__title"> {props.title} </p>

        <Chevron className={`${setRotate}`} width={10} fill={"#000"} />
      </button>
      <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordian__content">
        <div className="accordian__text" dangerouslySetInnerHTML={{__html: props.content}} />
      </div>
    </div>
  );
}

export default Accordian;
