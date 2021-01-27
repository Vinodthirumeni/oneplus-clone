import React from "react";
import "./FooterSecond.css";

function FooterSecond({ banner, title1, title2, title3 }) {
  return (
    <div className="footerSecond">
      <img src={banner} alt="#footer" />
      <div className="footerSecondFirst">
        <p className="footerSecondFirstTitle1">{title1}</p>
        <p className="footerSecondFirstTitle2">{title2}</p>
        <input placeholder="Email address" />
        <p className="footerSecondFirstTitle3">
          {title3}
        </p>
      </div>
    </div>
  );
}

export default FooterSecond;
