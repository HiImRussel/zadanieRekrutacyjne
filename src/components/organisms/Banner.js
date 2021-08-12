import SecBanner from "../molecules/SecBanner";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(CSSPlugin);

const Banner = () => {
  useEffect(() => {
    const secBanner = Array.from(document.querySelector(".secBanner").children);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".secBanner",
        start: "-20% top",
      },
    });

    secBanner.forEach((element) => {
      tl.fromTo(
        element,
        {
          transform: "translateY(20px)",
          opacity: 0,
          ease: "Power4.In",
        },
        { transform: "translateY(0px)", opacity: 1 }
      ).delay(0.5);
    });
  }, []);
  return <SecBanner />;
};

export default Banner;
