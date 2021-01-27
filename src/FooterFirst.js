import React from "react";
import "./FooterFirst.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function FooterFirst({ ad, title1, title2, learn_more }) {
  return (
    <div className="footerFirst">
      <div className="footerFirstBody">
        <img src={ad} alt="#ads" />
        <p>{title1}</p>
        <div className="footerFirstText">
          <a href={learn_more}>{title2}</a>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default FooterFirst;
