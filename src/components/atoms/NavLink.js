const NavLink = ({ link, text }) => {
  return (
    <li className="header__left__nav__ul__li">
      <a href={link} className="header__left__nav__ul__li__link">
        {text}
      </a>
    </li>
  );
};

export default NavLink;
