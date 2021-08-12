import NavLink from "../atoms/NavLink";

const NavDesktop = ({ navLinks }) => {
  const nav = navLinks.map((link) => (
    <NavLink key={link.id} link={link.link} text={link.text} />
  ));
  return (
    <nav className="header__left__nav">
      <ul className="header__left__nav__ul">{nav}</ul>
    </nav>
  );
};

export default NavDesktop;
