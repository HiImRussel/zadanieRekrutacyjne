import FooterDown from "../molecules/FooterDown";
import FooterTop from "../molecules/FooterTop";

import "../../css/footer.css";

const Footer = ({ footerLogos, navLinks, footerLinks }) => {
  return (
    <footer>
      <FooterTop footerLogos={footerLogos} />
      <FooterDown navLinks={navLinks} footerLinks={footerLinks} />
    </footer>
  );
};

export default Footer;
