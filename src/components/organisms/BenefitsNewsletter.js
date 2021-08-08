import BenefitBoxes from "./BenefitBoxes";

const BenefitsNewsletter = ({ benefitsData }) => {
  return (
    <div>
      <BenefitBoxes benefitsData={benefitsData} />
    </div>
  );
};

export default BenefitsNewsletter;
