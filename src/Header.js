import React from "react";
import "./Header.css";
import Logo from "./images/logo.jpg";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import Popup from "./PopUp";

import Phone1 from "./images/Phone1.jpg";
import Phone2 from "./images/Phone2.jpg";
import Phone3 from "./images/Phone3.jpg";
import Phone4 from "./images/Phone4.jpg";
import Phone5 from "./images/Phone5.jpg";

import Tv1 from "./images/Tv1.jpg";
import Tv2 from "./images/Tv2.jpg";
import Tv3 from "./images/Tv3.jpg";

import Store1 from "./images/Store1.jpg";
import Store2 from "./images/Store2.jpg";
import Store3 from "./images/Store3.jpg";
import Store4 from "./images/Store4.jpg";
import Store5 from "./images/Store5.jpg";
import Store6 from "./images/Store6.jpg";
import Store7 from "./images/Store7.jpg";
import Store8 from "./images/Store8.jpg";

function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <img src={Logo} alt="#logo" />
      </div>
      <div className="headerMiddle">
        <div className="headerMiddleLeft">
          <p className="headerPop">Phone</p>
          <div className="headerPopHide">
            <div className="headerPopHideFlex">
              <Popup img={Phone1} title="OnePlus 8T" />
              <Popup img={Phone2} title="OnePlus Nord" />
              <Popup img={Phone3} title="OnePlus 8 Pro" />
              <Popup img={Phone4} title="OnePlus 8" />
              <Popup img={Phone5} title="OnePlus 7T Pro" />
            </div>
          </div>
          <h6>New</h6>
        </div>
        <p className="headerPop">TV</p>
        <div className="headerPopHide">
          <div className="headerPopHideFlex">
            <Popup img={Tv1} title="OnePlus TV Q1 Series" />
            <Popup img={Tv2} title="OnePlus TV U Series 55U1" />
            <Popup img={Tv3} title="OnePlus TV Y Series" />
          </div>
        </div>
        <p className="headerPop">Store</p>
        <div className="headerPopHide">
          <div className="headerPopHideFlex">
            <Popup img={Store1} title="Phone" />
            <Popup img={Store2} title="TV" />
            <Popup img={Store3} title="Audio" />
            <Popup img={Store4} title="Wearables" />
            <Popup img={Store5} title="Gear" />
            <Popup img={Store6} title="Cases & Protection" />
            <Popup img={Store7} title="Power $ Cables" />
            <Popup img={Store8} title="Bundle" />
          </div>
        </div>
        <a href="https://oneplus-clone.web.app/">About</a>
        <a href="https://oneplus-clone.web.app/">Support</a>
        <a href="https://oneplus-clone.web.app/">Community</a>
        <a href="https://oneplus-clone.web.app/">
          Find a store
        </a>
      </div>
      <div className="headerRight">
        <AccountCircleOutlinedIcon />
        <div className="headerPopHideText">
          <div className="headerPopHideFlexText">
            <p>Orders</p>
            <p>Account</p>
            <p>Refer a friend</p>
            <p>
              Red Cable Membership <span>New</span>
            </p>
            <div className="headerPopHideFlexSubText">
              <p>Sign in</p>
              <p>Sign up</p>
            </div>
          </div>
        </div>
        <LocalMallOutlinedIcon />
        <div className="headerPopHideText">
          <div className="headerPopHideFlexTextIcon">
            <p>You are ₹499 away from free shipping.</p>
            <LocalMallOutlinedIcon />
            <p>
              Your shopping cart is empty right now, but it doesn't have to be!
            </p>
            <button>Go Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
