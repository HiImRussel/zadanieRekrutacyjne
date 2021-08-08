import NewsletterIconBox from "./NewsletterIconBox";

const NewsletterRight = ({ newsletterData }) => {
  const box = newsletterData
    .reverse()
    .map((data) => (
      <NewsletterIconBox key={data.id} icon={data.icon} text={data.text} />
    ));
  return <div className="newsletterRight">{box}</div>;
};

export default NewsletterRight;
