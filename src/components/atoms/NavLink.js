const NavLink = ({ link, text }) => {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
};

export default NavLink;
