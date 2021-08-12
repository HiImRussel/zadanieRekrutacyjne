import HomeBannerLeft from "../../molecules/HomeBannerLeft";
import "./homeBanner.css";
import image from "../../../assets/home-page/illustration-hero.png";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import { Power4 } from "gsap";

gsap.registerPlugin(CSSPlugin);

const HomeBanner = () => {
  useEffect(() => {
    const homeLeft = Array.from(
      document.querySelector(".homeBanner__left").children
    );
    const tl = gsap.timeline();

    homeLeft.forEach((element) => {
      tl.fromTo(
        element,
        {
          transform: "translateX(-30px)",
          ease: Power4.easeIn,
          opacity: 0,
        },
        { transform: "translateX(0px)", opacity: 1 }
      ).delay(0.2);
    });

    gsap.fromTo(
      ".homeBanner img",
      {
        transform: "translateX(15%)",
        ease: Power4.easeIn,
        opacity: 0,
        duration: 1.5,
      },
      {
        transform: `translateX(10%)`,
        opacity: 1,
      }
    );
  }, []);
  return (
    <section className="homeBanner">
      <div className="homeBanner__left">
        <HomeBannerLeft />
      </div>
      <img
        src={image}
        alt="phone and application window"
        className="homeBanner__left__bannerImg"
      />
    </section>
  );
};

export default HomeBanner;
