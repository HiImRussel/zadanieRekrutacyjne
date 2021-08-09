import OpinionSlider from "./OpinionSlider";
import "../../css/opinion.css";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import $ from "jquery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const Opinion = ({ userOpinions }) => {
  useEffect(() => {
    const opinionSection = $(".OpinionSection").children().toArray();
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".OpinionSection",
        start: "-10% top",
      },
    });

    opinionSection.forEach((element) => {
      tl.fromTo(
        element,
        { opacity: 0, ease: "Power4.In", transform: "translateY(20px)" },
        { opacity: 1, transform: "translateY(0px)" }
      ).delay(0.5);
    });
  }, []);

  return (
    <section className="OpinionSection">
      <h1>Co mówią zadowoleni klienci</h1>
      <OpinionSlider userOpinions={userOpinions} />
    </section>
  );
};

export default Opinion;
