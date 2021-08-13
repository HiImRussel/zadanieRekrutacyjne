import NewsletterLeft from "../../molecules/NewsletterLeft";
import NewsletterRight from "../../molecules/NewsletterRight";
import "./newsletter.css";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4 } from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const Newsletter = ({ newsletterData }) => {
  useEffect(() => {
    const newsletterLeft = Array.from(
      document.querySelector(".benefitNewsletter__newsletter__left").children
    );
    const newsletterRight = Array.from(
      document.querySelector(".benefitNewsletter__newsletter__right").children
    );

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefitNewsletter__newsletter",
        start: "-150px top",
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefitNewsletter__newsletter",
        start: "-150px top",
      },
    });

    newsletterLeft.forEach((element) => {
      tl1
        .fromTo(
          element,
          { transform: "translateX(-20px)", opacity: 0, ease: Power4.easeIn },
          { transform: "translateX(0px)", opacity: 1 }
        )
        .delay(0.3);
    });

    newsletterRight.forEach((element) => {
      tl2
        .fromTo(
          element,
          { opacity: 0, transform: "translateX(-20px)", ease: Power4.easeIn },
          { opacity: element.style.opacity, transform: "translateX(0px)" }
        )
        .delay(0.1);
    });
  }, []);
  return (
    <div className="benefitNewsletter__newsletter">
      <NewsletterLeft />
      <NewsletterRight newsletterData={newsletterData} />
    </div>
  );
};

export default Newsletter;
