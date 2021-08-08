import FooterDown from "../molecules/FooterDown";
import FooterTop from "../molecules/FooterTop";

import "../../css/footer.css";
import RealisationSection from "../molecules/RealisationSection";

const Footer = ({ footerLogos, navLinks, footerLinks }) => {
  return (
    <footer>
      <FooterTop footerLogos={footerLogos} />
      <FooterDown navLinks={navLinks} footerLinks={footerLinks} />
      <RealisationSection />
    </footer>
  );
};

export default Footer;
