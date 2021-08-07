import FaqLeft from "../molecules/FaqLeft";

import "../../css/faq.css";
import FaqBoxes from "./FaqBoxes";

const FAQ = ({ faqBoxesData }) => {
  return (
    <section className="faq">
      <FaqLeft />
      <FaqBoxes faqBoxesData={faqBoxesData} />
    </section>
  );
};

export default FAQ;
