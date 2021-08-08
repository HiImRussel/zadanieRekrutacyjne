import FooterDownLeft from "./FooterDownLeft";
import FooterDownRight from "./FooterDownRight";

const FooterDown = ({ navLinks, footerLinks }) => {
  return (
    <div className="footerDown">
      <FooterDownLeft navLinks={navLinks} />
      <FooterDownRight footerLinks={footerLinks} />
    </div>
  );
};

export default FooterDown;
