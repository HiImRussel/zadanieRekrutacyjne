import FaqIcon from "./FaqIcon";

const FaqBoxTitle = ({ title }) => {
  return (
    <div className="faq__boxes__box__title">
      <h3 className="faq__boxes__box__title__header">{title}</h3>
      <FaqIcon />
    </div>
  );
};

export default FaqBoxTitle;
