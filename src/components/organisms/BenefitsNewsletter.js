import BenefitBoxes from "./BenefitBoxes/BenefitBoxes";
import Newsletter from "./Newsletter/Newsletter";

const BenefitsNewsletter = ({ benefitsData, newsletterData }) => {
  return (
    <section className="benefit-newsletter">
      <BenefitBoxes benefitsData={benefitsData} />
      <Newsletter newsletterData={newsletterData} />
    </section>
  );
};

export default BenefitsNewsletter;
