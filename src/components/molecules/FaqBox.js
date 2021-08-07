import FaqDescription from "../atoms/FaqBoxDescription";
import FaqBoxTitle from "../atoms/FaqBoxTitle";

const FaqBox = ({ data }) => {
  const { title, description } = data;
  return (
    <div class="faqBox">
      <FaqBoxTitle title={title} />
      <FaqDescription desc={description} />
    </div>
  );
};

export default FaqBox;
