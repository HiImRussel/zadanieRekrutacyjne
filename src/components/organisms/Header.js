import NavLogo from "../atoms/NavLogo";
import NavDesktop from "./NavDesktop";

const Header = ({ navLinks }) => {
  return (
    <header>
      <NavLogo />
      <NavDesktop navLinks={navLinks} />
    </header>
  );
};

export default Header;
