import NewsletterIcon from "../atoms/NewsletterIcon";
import NewsletterText from "../atoms/NewsletterText";

const NewsletterIconBox = ({ icon, text }) => {
  return (
    <div className="benefitNewsletter__newsletter__right__iconBox">
      <NewsletterIcon icon={icon} />
      <NewsletterText text={text} />
    </div>
  );
};

export default NewsletterIconBox;
