import React from "react";
import "./FooterThird.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function FooterThird() {
  return (
    <>
      <div className="footerThird">
        <div className="footerThirdText">
          <p>
            <strong>Phones</strong>
          </p>
          <a href="https://oneplus-clone.web.app/">OnePlus 8T</a>
          <a href="https://oneplus-clone.web.app/">OnePlus Nord</a>
          <a href="https://oneplus-clone.web.app/">OnePlus 8 Pro</a>
          <a href="https://oneplus-clone.web.app/">OnePlus 8</a>
          <a href="https://oneplus-clone.web.app/">OnePlus 7T Pro</a>
        </div>
        <div className="footerThirdText">
          <p>
            <strong>Accessories</strong>
          </p>
          <a href="https://oneplus-clone.web.app/">
            Cases & Protection
          </a>
          <a href="https://oneplus-clone.web.app/">
            Power & Cables
          </a>
          <a href="https://oneplus-clone.web.app/">Audio</a>
          <a href="https://oneplus-clone.web.app/">Bundles</a>
          <a href="https://oneplus-clone.web.app/">Gear</a>
        </div>
        <div className="footerThirdText">
          <p>
            <strong>Programs</strong>
          </p>
          <a href="https://oneplus-clone.web.app/">
            OnePlus Store app
          </a>
          <a href="https://oneplus-clone.web.app/">Education Benefits</a>
          <a href="https://oneplus-clone.web.app/">Buyback Program</a>
          <a href="https://oneplus-clone.web.app/">
            Referral Program
          </a>
          <a href="https://oneplus-clone.web.app/">Shot on OnePlus</a>
        </div>
        <div className="footerThirdText">
          <p>
            <strong>Support</strong>
          </p>
          <a href="https://oneplus-clone.web.app/">
            Shopping FAQs
          </a>
          <a href="https://oneplus-clone.web.app/">
            User Manuals
          </a>
          <a href="https://oneplus-clone.web.app/">
            Service Centers
          </a>
          <a href="https://oneplus-clone.web.app/">
            Repair Service
          </a>
          <a href="https://oneplus-clone.web.app/">
            Contact Us
          </a>
        </div>
        <div className="footerThirdText">
          <p>
            <strong>Company</strong>
          </p>
          <a href="https://oneplus-clone.web.app/">About OnePlus</a>
          <a href="https://oneplus-clone.web.app/">Community</a>
          <a href="https://oneplus-clone.web.app/">
            Careers
          </a>
          <a href="https://oneplus-clone.web.app/">
            Sustainability
          </a>
          <a href="https://oneplus-clone.web.app/">Press</a>
        </div>
      </div>
      <div className="footerThirdBottom">
        <div className="footerThirdBottomLeft">
          <p>Cash on Delivery</p>
          <p>Credit / Debit Card</p>
          <p>NetBanking</p>
          <p>EMI</p>
          <p>Wallet</p>
          <p href="tel:1800 102 8411">1800 102 8411 (Toll Free)</p>
          <p>9:00 am - 9:00 pm, Mon to Sun</p>
        </div>
        <div className="footerThirdBottomRight">
          <a href="https://oneplus-clone.web.app/">
            <FacebookIcon />
          </a>
          <a href="https://oneplus-clone.web.app/">
            <InstagramIcon />
          </a>
          <a href="https://oneplus-clone.web.app/">
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="footerThirdLast">
        <div className="footerThirdLastLeft">
          <p>India ( English / INR )</p>
        </div>
        <div className="footerThirdLastRight">
          <a href="https://oneplus-clone.web.app/">
            Privacy Policy
          </a>
          <a href="https://oneplus-clone.web.app/">
            User Agreement
          </a>
          <a href="https://oneplus-clone.web.app/">
            Terms of Sales
          </a>
          <a href="https://oneplus-clone.web.app/">
            E-waste management
          </a>
          <a href="https://oneplus-clone.web.app/">Security Feedback</a>
          <a href="https://oneplus-clone.web.app/">Site Map</a>
        </div>
      </div>

      <div className="footerThirdLastCopyRight">
        <p>© 2013 - 2021 OnePlus. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default FooterThird;
