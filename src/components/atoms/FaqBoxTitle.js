import FaqIcon from "./FaqIcon";

const FaqBoxTitle = ({ title }) => {
  return (
    <div class="boxTitle">
      <h3>{title}</h3>
      <FaqIcon />
    </div>
  );
};

export default FaqBoxTitle;
