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
  return (
    <section className="faq">
      <FaqLeft />
      <FaqBoxes faqBoxesData={faqBoxesData} />
    </section>
  );
};

export default FAQ;
