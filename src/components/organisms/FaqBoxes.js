import FaqBox from "../molecules/FaqBox";

const FaqBoxes = ({ faqBoxesData }) => {
  const boxes = faqBoxesData.map((data) => (
    <FaqBox key={data.id} data={data} />
  ));
  return <>{boxes}</>;
};

export default FaqBoxes;
