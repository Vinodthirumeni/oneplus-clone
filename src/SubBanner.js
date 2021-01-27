import React from "react";
import "./SubBanner.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function SubBanner({ banner, title1, title2, title3, css,buy_now }) {
  return (
    <div className="subBanner">
      <img src={banner} alt="#subbanner" />
      <div className="subBannerSide">
        <p
          className={`
        subBannerSideTitle1
        ${css === "sb" ? "sb" : ""}
      `}
        >
          {title1}
        </p>
        <p
          className={`
        subBannerSideTitle2
        ${css === "sb" ? "sb" : ""}
      `}
        >
          {title2}
        </p>
        <p
          className={`
        subBannerSideTitle3
        ${css === "sb" ? "sb" : ""}
      `}
        >
          <a href={buy_now}>{title3}</a>
          <KeyboardArrowRightIcon />
        </p>
      </div>
    </div>
  );
}

export default SubBanner;
