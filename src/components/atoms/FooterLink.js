const FooterLink = ({ link, text }) => {
  return (
    <a href={link}>
      <li>{text}</li>
    </a>
  );
};

export default FooterLink;
