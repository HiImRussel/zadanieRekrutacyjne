import NavLink from "../atoms/NavLink";

const NavDesktop = ({ navLinks }) => {
  const nav = navLinks.map((link) => (
    <NavLink key={link.id} link={link.link} text={link.text} />
  ));
  return (
    <nav>
      <ul>{nav}</ul>
    </nav>
  );
};

export default NavDesktop;
