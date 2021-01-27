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
          <a href="https://www.oneplus.in/8t?from=foot">OnePlus 8T</a>
          <a href="https://www.oneplus.in/nord?from=foot">OnePlus Nord</a>
          <a href="https://www.oneplus.in/8-pro?from=foot">OnePlus 8 Pro</a>
          <a href="https://www.oneplus.in/8?from=foot">OnePlus 8</a>
          <a href="https://www.oneplus.in/7t-pro?from=foot">OnePlus 7T Pro</a>
        </div>
        <div className="footerThirdText">
          <p>
            <strong>Accessories</strong>
          </p>
          <a href="https://www.oneplus.in/store/cases-protection?from=foot">
            Cases & Protection
          </a>
          <a href="https://www.oneplus.in/store/power-cables?from=foot">
            Power & Cables
          </a>
          <a href="https://www.oneplus.in/store/audio?from=foot">Audio</a>
          <a href="https://www.oneplus.in/store/bundles?from=foot">Bundles</a>
          <a href="https://www.oneplus.in/store/gear?from=foot">Gear</a>
        </div>
        <div className="footerThirdText">
          <p>
            <strong>Programs</strong>
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.oneplus.mall">
            OnePlus Store app
          </a>
          <a href="https://www.oneplus.in/education">Education Benefits</a>
          <a href="https://www.oneplus.in/buyback?from=foot">Buyback Program</a>
          <a href="https://www.oneplus.in/referral?from=foot">
            Referral Program
          </a>
          <a href="https://photos.oneplus.com/?from=foot">Shot on OnePlus</a>
        </div>
        <div className="footerThirdText">
          <p>
            <strong>Support</strong>
          </p>
          <a href="https://www.oneplus.in/support/shopping-help/details?from=foot">
            Shopping FAQs
          </a>
          <a href="https://www.oneplus.in/support/manuals?from=foot">
            User Manuals
          </a>
          <a href="https://www.oneplus.in/support/service-center?from=foot">
            Service Centers
          </a>
          <a href="https://www.oneplus.in/support/repair?from=foot">
            Repair Service
          </a>
          <a href="https://www.oneplus.in/support/contact?from=foot">
            Contact Us
          </a>
        </div>
        <div className="footerThirdText">
          <p>
            <strong>Company</strong>
          </p>
          <a href="https://www.oneplus.in/brand?from=foot">About OnePlus</a>
          <a href="https://forums.oneplus.com/?from=foot">Community</a>
          <a href="https://oneplus.zohorecruit.in/recruit/Portal.na?digest=LN@TPV3Mvf0el6bBA.0JxQmINGNsv.wxQgEMVyonNHM-&iframe=false&mode=home&embedsource=CareerSite">
            Careers
          </a>
          <a href="https://www.oneplus.in/sustainability?from=foot">
            Sustainability
          </a>
          <a href="https://www.oneplus.in/press?from=foot">Press</a>
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
          <a href="https://www.facebook.com/oneplusin">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/oneplus_india">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/OnePlus_IN">
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="footerThirdLast">
        <div className="footerThirdLastLeft">
          <p>India ( English / INR )</p>
        </div>
        <div className="footerThirdLastRight">
          <a href="https://www.oneplus.in/legal/privacy-policy?from=foot">
            Privacy Policy
          </a>
          <a href="https://www.oneplus.in/legal/user-agreement?from=foot">
            User Agreement
          </a>
          <a href="https://www.oneplus.in/legal/terms-of-sales?from=foot">
            Terms of Sales
          </a>
          <a href="https://www.oneplus.in/legal/e-waste-management?from=foot">
            E-waste management
          </a>
          <a href="mailto:security@oneplus.com">Security Feedback</a>
          <a href="https://www.oneplus.in/sitemap?from=foot">Site Map</a>
        </div>
      </div>

      <div className="footerThirdLastCopyRight">
        <p>© 2013 - 2021 OnePlus. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default FooterThird;
