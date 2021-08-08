import BenefitBox from "../molecules/BenefitBox";
import "../../css/benefit.css";

const BenefitBoxes = ({ benefitsData }) => {
  const boxes = benefitsData.map((benefit) => (
    <BenefitBox
      key={benefit.id}
      icon={benefit.icon}
      title={benefit.title}
      text={benefit.text}
    />
  ));
  return <div className="benefitBoxes">{boxes}</div>;
};

export default BenefitBoxes;
