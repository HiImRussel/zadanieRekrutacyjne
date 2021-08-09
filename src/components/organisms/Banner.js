import SecBanner from "../molecules/SecBanner";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import $ from "jquery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(CSSPlugin);

const Banner = () => {
  useEffect(() => {
    const secBanner = $(".secBanner").children().toArray();
    let delay = 0;

    secBanner.forEach((element) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".secBanner",
            start: "-20% top",
          },
        })
        .fromTo(
          element,
          {
            transform: "translateY(20px)",
            opacity: 0,
            ease: "Power4.In",
          },
          { transform: "translateY(0px)", opacity: 1 }
        )
        .delay(delay);
      delay += 1;
    });
  }, []);
  return <SecBanner />;
};

export default Banner;
