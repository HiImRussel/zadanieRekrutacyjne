import FooterLink from "../atoms/FooterLink";
import FooterLinkTitle from "../atoms/FooterLinkTitle";

const FooterLinkPanel = ({ title, links }) => {
  const boxLinks = links.map((link) => (
    <FooterLink key={link.id} link={link.link} text={link.text} />
  ));
  return (
    <div className="linkPanel">
      <FooterLinkTitle title={title} />
      {boxLinks.length > 0 && <ul>{boxLinks}</ul>}
    </div>
  );
};

export default FooterLinkPanel;
