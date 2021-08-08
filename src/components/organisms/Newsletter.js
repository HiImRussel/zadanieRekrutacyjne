import NewsletterLeft from "../molecules/NewsletterLeft";
import NewsletterRight from "../molecules/NewsletterRight";
import "../../css/newsletter.css";

const Newsletter = ({ newsletterData }) => {
  return (
    <div className="newsletterBox">
      <NewsletterLeft />
      <NewsletterRight newsletterData={newsletterData} />
    </div>
  );
};

export default Newsletter;
