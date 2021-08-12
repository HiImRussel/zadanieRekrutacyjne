import NavLogo from "../../atoms/NavLogo";
import NavDesktop from "../../molecules/NavDesktop";
import "./nav.css";
import { useEffect } from "react";

import gsap from "gsap/gsap-core";
import { Power4 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

const Header = ({ navLinks }) => {
  let isOpen = false;
  const handleHamburgerClick = () => {
    const lines = document.querySelectorAll(".hamburgerMenu span");
    const lineInside = document.querySelector(".lineInside");
    const mobileMenu = document.querySelector(".mobileNav");
    const mobileList = document.querySelector(".mobileList");
    const html = document.querySelector("html");

    gsap.to(lines[0], { opacity: isOpen ? 1 : 0 });
    gsap.to(lines[3], { opacity: isOpen ? 1 : 0 });
    gsap.to(lines[1], { rotate: isOpen ? "0deg" : "45deg" });

    gsap.to(lineInside, {
      rotate: isOpen ? "0deg" : "-90deg",
    });
    gsap.to(mobileMenu, {
      visibility: isOpen ? "inherit" : "inherit",
      width: isOpen ? "0px" : "100vw",
      ease: Power4.easeIn,
    });
    gsap.to(mobileList, {
      opacity: isOpen ? 0 : 1,
      ease: Power4.easeIn,
    });

    html.style.overflowY = isOpen ? "scroll" : "hidden";
    isOpen = !isOpen;
  };

  useEffect(() => {
    const header = document.querySelector("header");
    document.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        header.style.height = "70px";
        header.style.boxShadow = "0px 4px 6px 2px rgba(0, 0, 0, 0.28)";
      } else {
        header.style.height = "120px";
        header.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.28)";
      }
    });

    gsap.to("header", { opacity: 1, ease: "Power4.In", duration: 0.2 });
  }, []);

  return (
    <header>
      <div className="navLeft">
        <NavLogo />
        <NavDesktop navLinks={navLinks} />
      </div>
      <div className="navRight">
        <a href="...." className="headerButton">
          <button className="navButton">Zapisz się na wizytę on-line</button>
        </a>
        <div className="hamburgerMenu" onClick={handleHamburgerClick}>
          <span></span>
          <span>
            <span className="lineInside"></span>
          </span>
          <span></span>
        </div>
      </div>
      <nav className="mobileNav">
        <div className="mobileList">
          <NavDesktop navLinks={navLinks} />
          <a href="...." className="headerButton">
            <button className="navButton">Zapisz się na wizytę on-line</button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;