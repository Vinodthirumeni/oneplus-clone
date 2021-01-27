import React from "react";
import "./Banner.css";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function Banner({
  banner,
  title1,
  title2,
  title3,
  title4,
  title5,
  css,
  download_link,
  buy_now,
  white,
}) {
  console.log(css);
  return (
    <div className="banner">
      <img src={banner} alt="#banner1" />

      <div
        className={`
        bannerSide
        ${css === "b2" ? "b2" : ""}
        ${css === "b3" ? "b3" : ""}
        ${css === "b4" ? "b4" : ""}
        ${css === "b5" ? "b5" : ""}
        ${css === "b6" ? "b6" : ""}
        ${css === "b7" ? "b7" : ""}
        ${css === "b8" ? "b8" : ""}
      `}
      >
        <p
          className={`
        bannerText1
        ${css === "b7" ? "t7" : ""}
        ${css === "b8" ? "t8" : ""}
      `}
        >
          {title1}
        </p>

        <p
          className={`
        bannerText2
        ${css === "b7" ? "tt7" : ""}
        ${css === "b8" ? "tt8" : ""}
      `}
        >
          {title2}
        </p>

        <p
          className={`
        bannerText2
        ${css === "b7" ? "tttt7" : ""}
        ${css === "b8" ? "tttt8" : ""}
      `}
        >
          {title4}
        </p>

        {white
          ? title5 && (
              <button
                className={`
          }
        bannerTextButtonWhite
        ${css === "b7" ? "btn7" : ""}
        ${css === "b8" ? "btn8" : ""}
      `}
              >
                <a href={buy_now}>{title5}</a>
              </button>
            )
          : title5 && (
              <button
                className={`
          }
        bannerTextButton
        ${css === "b7" ? "btn7" : ""}
        ${css === "b8" ? "btn8" : ""}
      `}
              >
                <a href={buy_now}>{title5}</a>
              </button>
            )}

        <div
          className={`
        bannerTextLink
        ${css === "b7" ? "ttt7" : ""}
        ${css === "b8" ? "ttt8" : ""}
      `}
        >
          <a href={download_link}>{title3}</a>
          <KeyboardArrowRightIcon />
        </div>
      </div>
    </div>
  );
}

export default Banner;
