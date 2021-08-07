import FaqIcon from "./FaqIcon";

const FaqBoxTitle = ({ title }) => {
  return (
    <div className="faqBoxTitle">
      <h3>{title}</h3>
      <FaqIcon />
    </div>
  );
};

export default FaqBoxTitle;
