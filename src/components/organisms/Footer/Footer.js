import FooterDown from "../../molecules/FooterDown";
import FooterTop from "../../molecules/FooterTop";

import "./footer.css";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4 } from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSPlugin);

const Footer = ({ footerLogos, navLinks, footerLinks }) => {
  useEffect(() => {
    const footer = Array.from(document.querySelector(".footer").children);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "-10% top",
      },
    });

    footer.forEach((element) => {
      tl.fromTo(
        element,
        { opacity: 0, ease: Power4.easeIn },
        { opacity: 1 }
      ).delay(0.5);
    });
  }, []);
  return (
    <footer className="footer">
      <FooterTop footerLogos={footerLogos} />
      <FooterDown navLinks={navLinks} footerLinks={footerLinks} />
    </footer>
  );
};

export default Footer;
