import NavLogo from "../atoms/NavLogo";
import NavDesktop from "../molecules/NavDesktop";
import "../../css/nav.css";

const Header = ({ navLinks }) => {
  return (
    <header>
      <NavLogo />
      <NavDesktop navLinks={navLinks} />
      <a href="...." className="headerButton">
        <button className="navButton">Zapisz się na wizytę on-line</button>
      </a>
    </header>
  );
};

export default Header;
