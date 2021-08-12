import FooterLinkPanel from "./FooterLinkPanel";

const FooterDownRight = ({ footerLinks }) => {
  const boxLinks = footerLinks.map((link) => (
    <FooterLinkPanel key={link.id} title={link.title} links={link.links} />
  ));
  return (
    <div className="footer__down__right">{boxLinks.length > 0 && boxLinks}</div>
  );
};

export default FooterDownRight;
