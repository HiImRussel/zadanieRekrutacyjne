import FaqBox from "../molecules/FaqBox";

const FaqBoxes = ({ faqBoxesData }) => {
  const boxes = faqBoxesData.map((data) => (
    <FaqBox key={data.id} data={data} />
  ));
  return <div className="faqBoxes">{boxes}</div>;
};

export default FaqBoxes;
