import BenefitBoxes from "./BenefitBoxes";
import Newsletter from "./Newsletter";

const BenefitsNewsletter = ({ benefitsData, newsletterData }) => {
  return (
    <div>
      <BenefitBoxes benefitsData={benefitsData} />
      <Newsletter newsletterData={newsletterData} />
    </div>
  );
};

export default BenefitsNewsletter;
