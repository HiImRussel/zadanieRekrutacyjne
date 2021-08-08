import BenefitIcon from "../atoms/BenefitIcon";
import BenefitTitle from "../atoms/BenefitTitle";
import BenefitText from "../atoms/BenefitText";

const BenefitBox = ({ icon, title, text }) => {
  return (
    <div className="benefitBox">
      <BenefitIcon icon={icon} />
      <BenefitTitle title={title} />
      <BenefitText text={text} />
    </div>
  );
};

export default BenefitBox;
