import BenefitBox from "../molecules/BenefitBox";
import "../../css/benefit.css";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const BenefitBoxes = ({ benefitsData }) => {
  const boxes = benefitsData.map((benefit) => (
    <BenefitBox
      key={benefit.id}
      icon={benefit.icon}
      title={benefit.title}
      text={benefit.text}
    />
  ));

  useEffect(() => {
    const benefitBoxes = Array.from(
      document.querySelector(".benefitBoxes").children
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefitBoxes",
        start: "-50px top",
      },
    });

    benefitBoxes.forEach((element) => {
      tl.fromTo(
        element,
        { opacity: 0, transform: "translateY(20px)", ease: "Power4.In" },
        { opacity: 1, transform: "translateY(0px)" }
      ).delay(0.2);
    });
  }, []);
  return <div className="benefitBoxes">{boxes}</div>;
};

export default BenefitBoxes;
