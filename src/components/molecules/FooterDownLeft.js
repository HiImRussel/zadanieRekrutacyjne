import NavLink from "../atoms/NavLink";

const FooterDownLeft = ({ navLinks }) => {
  const links = navLinks.map((link) => (
    <NavLink link={link.link} text={link.text} key={link.id} />
  ));
  return (
    <div className="footer__down__left">
      <p className="footer__down__left__paragraph">
        Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami ub
        natury intymenj, jesteś we właściwym miejscu.
      </p>
      {links.length > 0 && links}
    </div>
  );
};

export default FooterDownLeft;
