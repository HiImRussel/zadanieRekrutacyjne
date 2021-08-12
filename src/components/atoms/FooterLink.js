const FooterLink = ({ link, text }) => {
  return (
    <a href={link}>
      <li className="footer__down__right__linkPanel__ul__li">{text}</li>
    </a>
  );
};

export default FooterLink;
