import NavLogo from "../atoms/NavLogo";
import NavDesktop from "../molecules/NavDesktop";
import "../../css/nav.css";

const Header = ({ navLinks }) => {
  let isOpen = false;
  const handleHamburgerClick = () => {
    const lines = document.querySelectorAll(".hamburgerMenu span");
    const lineInside = document.querySelector(".lineInside");
    const mobileMenu = document.querySelector(".mobileNav");
    const mobileList = document.querySelector(".mobileList");
    const html = document.querySelector("html");

    lines[0].style.opacity = isOpen ? 1 : 0;
    lines[3].style.opacity = isOpen ? 1 : 0;
    lines[1].style.transform = isOpen ? "rotate(0deg)" : "rotate(45deg)";
    lineInside.style.transform = isOpen ? "rotate(0deg)" : "rotate(-90deg)";
    mobileMenu.style.visibility = isOpen ? "hidden" : "inherit";
    mobileMenu.style.width = isOpen ? "0px" : "100vw";
    mobileList.style.visibility = isOpen ? "hidden" : "inherit";
    mobileList.style.opacity = isOpen ? 0 : 1;
    html.style.overflowY = isOpen ? "scroll" : "hidden";
    isOpen = !isOpen;
  };

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
