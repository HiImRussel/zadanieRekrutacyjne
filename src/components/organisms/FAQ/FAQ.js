import FaqLeft from "../../molecules/FaqLeft";

import "./faq.css";
import FaqBoxes from "../FaqBoxes";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4 } from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const FAQ = ({ faqBoxesData }) => {
  useEffect(() => {
    const faqLeft = Array.from(document.querySelector(".faq__left").children);
    const faqBoxes = Array.from(document.querySelector(".faq__boxes").children);

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
            transform: "translateX(-150px)",
            opacity: 0,
            ease: Power4.easeIn,
          },
          {
            transform:
              element.tagName === "IMG"
                ? element.style.transform
                : "translateX(0px)",
            opacity: 1,
          }
        )
        .delay(0.2);
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
