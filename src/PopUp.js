import React from "react";
import "./PopUp.css";

function PopUp({ img, title }) {
  return (
    <div className="popUp">
      <img src={img} alt="#TV" />
      <p>{title}</p>
    </div>
  );
}

export default PopUp;
