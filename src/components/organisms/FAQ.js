import FaqLeft from "../molecules/FaqLeft";

import "../../css/faq.css";
import FaqBoxes from "./FaqBoxes";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import $ from "jquery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const FAQ = ({ faqBoxesData }) => {
  useEffect(() => {
    const faqLeft = $(".faqLeft").children().toArray();
    const faqBoxes = $(".faqBoxes").children().toArray();

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".faqLeft",
        start: "-350px top",
      },
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".faqBoxes",
        start: "-350px top",
      },
    });

    faqLeft.forEach((element) => {
      tl1
        .fromTo(
          element,
          {
            transform: "translateY(20px)",
            opacity: 0,
            ease: "Power4.In",
          },
          { transform: "translateY(0px)", opacity: 1 }
        )
        .delay(0.5);
    });

    faqBoxes.forEach((element) => {
      tl2
        .fromTo(
          element,
          {
            opacity: 0,
            ease: "Power4.In",
          },
          {
            opacity: 1,
          }
        )
        .delay(0.2);
    });
  }, []);

  return (
    <section className="faq">
      <FaqLeft />
      <FaqBoxes faqBoxesData={faqBoxesData} />
    </section>
  );
};

export default FAQ;
