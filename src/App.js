import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import SubBanner from "./SubBanner";
import FooterFirst from "./FooterFirst";
import FooterSecond from "./FooterSecond";
import FooterThird from "./FooterThird";
import Banner1 from "./images/banner1.jpg";
import Banner2 from "./images/banner2.jpg";
import Banner3 from "./images/banner3.jpg";
import Banner4 from "./images/banner4.jpg";
import Banner5 from "./images/banner5.jpg";
import Banner6 from "./images/banner6.jpg";
import Banner7 from "./images/banner7.jpg";
import Banner8 from "./images/banner8.jpg";
import SubBanner1 from "./images/subBanner1.jpg";
import SubBanner2 from "./images/subBanner2.jpg";
import SubBanner3 from "./images/subBanner3.jpg";
import SubBanner4 from "./images/subBanner4.jpg";
import SubBanner5 from "./images/subBanner5.jpg";
import SubBanner6 from "./images/subBanner6.jpg";
import Ads1 from "./images/ads1.jpg";
import Ads2 from "./images/ads2.png";
import Ads3 from "./images/ads3.png";
import Footer from "./images/footer.jpg";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appBody">
        <div className="bannerApp">
          <Banner
            banner={Banner1}
            title1="OnePlus Store App"
            title2="Seamless Shopping Experience. Quick Support."
            title3="Download now"
            download_link="https://play.google.com/store/apps/details?id=com.oneplus.mall"
          />

          <Banner
            banner={Banner2}
            title1="Republic Day Sale"
            title2="19th - 26th Jan"
            title3="Learn more"
            css="b2"
            download_link="https://www.oneplus.in/event/republic-day-sale?from=homepage"
          />

          <Banner
            banner={Banner3}
            title1="OnePlus Buds Z Steven Harrington Limited Edition"
            title2="Early Access Sale Live now Red Cable Club Exclusive"
            title3="Learn more"
            title4="From ₹ 3 699"
            title5="Buy now"
            download_link="https://www.oneplus.in/audio/oneplus-buds-z-stevenharrington?from=homepage"
            buy_now="https://www.oneplus.in/product/oneplus-buds-z?from=homepage"
            css="b3"
          />

          <Banner
            banner={Banner4}
            title1="OnePlus Band"
            title2="Smart Everywear"
            title3="Learn more"
            title4="From ₹2 499"
            title5="Buy now"
            download_link="https://www.oneplus.in/oneplus-band?from=homepage"
            buy_now="https://www.oneplus.in/product/oneplus-band?from=homepage"
            css="b4"
          />

          <Banner
            banner={Banner5}
            title1="OnePlus TV Y Series"
            title2="Imagination & Intelligence"
            title3="Learn more"
            title4="From ₹14 999"
            title5="Buy now"
            download_link="https://www.oneplus.in/tv-y-series?from=homepage"
            buy_now="https://www.oneplus.in/oneplus-tv-y-series?from=homepage"
            css="b5"
          />

          <Banner
            banner={Banner6}
            title1="OnePlus Bullets Wireless Z series"
            title3="Learn more"
            title4="From ₹1 899"
            title5="Buy now"
            download_link="https://www.oneplus.in/product/oneplus-bullets-wireless-z?from=homepage"
            buy_now="https://www.oneplus.in/product/oneplus-bullets-wireless-z?from=homepage"
            css="b6"
          />

          <Banner
            banner={Banner7}
            title1="OnePlus 8T 5G"
            title2="Ultra Fast Charging. Ultra Smooth Scrolling."
            title3="Learn more"
            title4="From ₹42 999"
            title5="Buy now"
            download_link="https://www.oneplus.in/8t?from=homepage"
            buy_now="https://www.oneplus.in/oneplus-8t?from=homepage"
            css="b7"
            white
          />

          <Banner
            banner={Banner8}
            title1="OnePlus Nord"
            title2="Pretty much everything you could ask for"
            title3="Learn more"
            title4="From ₹24 999"
            title5="Buy now"
            download_link="https://www.oneplus.in/nord?from=homepage"
            buy_now="https://www.oneplus.in/oneplus-nord?from=homepage"
            css="b8"
            white
          />
        </div>
        <div className="subBannerApp">
          <div className="subCompBannerApp">
            <SubBanner
              banner={SubBanner1}
              title1="OnePlus Power Bank"
              title2="From ₹ 999"
              title3="Buy now"
              buy_now="https://www.oneplus.in/product/oneplus-power-bank-10000mah?from=homepage"
            />
            <SubBanner
              banner={SubBanner2}
              title1="OnePlus Bullets Wireless Z series"
              title2="From ₹1 899"
              title3="Buy now"
              buy_now="https://www.oneplus.in/product/oneplus-bullets-wireless-z?from=homepage"
            />
          </div>
          <div className="subCompBannerApp">
            <SubBanner
              banner={SubBanner3}
              title1="OnePlus Buds"
              title2="From ₹4 699"
              title3="Buy now"
              buy_now="https://www.oneplus.in/product/oneplus-buds"
            />
            <SubBanner
              banner={SubBanner4}
              title1="OnePlus Urban Traveller Backpack"
              title3="Learn more"
              buy_now="https://www.oneplus.in/product/oneplus-urban-traveler-backpack?from=homepage"
            />
          </div>
          <div className="subCompBannerApp">
            <SubBanner
              banner={SubBanner5}
              title1="Red Cable Club"
              title2="Join us and level up your membership"
              title3="Learn more"
              buy_now="https://www.oneplus.in/redcableclub?from=homepage"
              css="sb"
            />
            <SubBanner
              banner={SubBanner6}
              title1="OnePlus Education Benefits"
              title3="Download now"
              buy_now="https://www.oneplus.in/education?from=homepage"
            />
          </div>
        </div>
      </div>

      <div className="appFooter">
        <div className="appFooterFirst">
          <FooterFirst
            ad={Ads1}
            title1="The OnePlus Buds offer excellent battery life, and as we found out, these claims are quite accurate"
            title2="Learn more"
            learn_more="https://www.indiatoday.in/technology/reviews/story/oneplus-buds-review-the-bang-for-buck-tws-earphones-1707905-2020-08-05"
          />
          <FooterFirst
            ad={Ads2}
            title1="Overall, the audio performance is excellent. it balances both highs and lows perfectly"
            title2="Learn more"
            learn_more="https://www.fonearena.com/blog/319515/oneplus-buds-review.html#:~:text=The%20OnePlus%20Buds%20comes%20equipped,supports%20SBC%20and%20AAC%20codecs."
          />
          <FooterFirst
            ad={Ads3}
            title1="OnePlus Buds look absolutely stunning, especially the bold Nord Blue colour"
            title2="Learn more"
            learn_more="https://www.ibtimes.co.in/oneplus-buds-review-closing-wireless-loop-oneplus-ecosystem-826039#:~:text=OnePlus%20Buds%3A%20Battery,or%20less%20the%20claimed%20time."
          />
        </div>
        <div className="appFooterSecond">
          <FooterSecond
            banner={Footer}
            title1="Always be the first to know."
            title2="Sign up for our newsletter!"
            title3="Subscribe to receive marketing information"
          />
        </div>
        <div className="appFooterThird">
          <FooterThird />
        </div>
      </div>
    </div>
  );
}

export default App;
