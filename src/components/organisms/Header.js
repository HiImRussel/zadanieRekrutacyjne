import NavLogo from "../atoms/NavLogo";
import NavDesktop from "../molecules/NavDesktop";
import "../../css/nav.css";

const Header = ({ navLinks }) => {
  return (
    <header>
      <div className="navLeft">
        <NavLogo />
        <NavDesktop navLinks={navLinks} />
      </div>
      <a href="...." className="headerButton">
        <button className="navButton">Zapisz się na wizytę on-line</button>
      </a>
    </header>
  );
};

export default Header;
