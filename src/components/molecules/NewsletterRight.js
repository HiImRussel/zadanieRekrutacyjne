import NewsletterIconBox from "./NewsletterIconBox";

const NewsletterRight = ({ newsletterData }) => {
  const box = newsletterData
    .reverse()
    .map((data) => (
      <NewsletterIconBox key={data.id} icon={data.icon} text={data.text} />
    ));
  return <div className="benefitNewsletter__newsletter__right">{box}</div>;
};

export default NewsletterRight;
