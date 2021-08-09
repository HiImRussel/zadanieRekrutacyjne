import NewsletterLeft from "../molecules/NewsletterLeft";
import NewsletterRight from "../molecules/NewsletterRight";
import "../../css/newsletter.css";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import $ from "jquery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const Newsletter = ({ newsletterData }) => {
  useEffect(() => {
    const newsletterLeft = $(".newsletterLeft").children().toArray();
    const newsletterRight = $(".newsletterRight").children().toArray();

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".newsletterBox",
        start: "-20% top",
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".newsletterBox",
        start: "-20% top",
      },
    });

    newsletterLeft.forEach((element) => {
      tl1
        .fromTo(
          element,
          { transform: "translateX(-20px)", opacity: 0, ease: "Power4.In" },
          { transform: "translateX(0px)", opacity: 1 }
        )
        .delay(0.3);
    });

    newsletterRight.forEach((element) => {
      tl2
        .fromTo(
          element,
          { opacity: 0, transform: "translateX(-20px)", ease: "Power4.In" },
          { opacity: element.style.opacity, transform: "translateX(0px)" }
        )
        .delay(0.1);
    });
  }, []);
  return (
    <div className="newsletterBox">
      <NewsletterLeft />
      <NewsletterRight newsletterData={newsletterData} />
    </div>
  );
};

export default Newsletter;
