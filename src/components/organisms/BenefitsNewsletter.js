import BenefitBoxes from "./BenefitBoxes";
import Newsletter from "./Newsletter";

const BenefitsNewsletter = ({ benefitsData, newsletterData }) => {
  return (
    <section className="benefit-newsletter">
      <BenefitBoxes benefitsData={benefitsData} />
      <Newsletter newsletterData={newsletterData} />
    </section>
  );
};

export default BenefitsNewsletter;
