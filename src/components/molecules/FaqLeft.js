import FaqButton from "../atoms/FaqButton";
import faqIMG from "../../assets/home-page/illustration-faq.png";

const FaqLeft = () => {
  return (
    <div className="faq__left">
      <h2 className="faq__left__header">
        Najszęściej zadawane <br />
        pytania
      </h2>
      <FaqButton />
      <img
        src={faqIMG}
        alt="men with a tablet in hand"
        className="faq__left__image"
      />
    </div>
  );
};

export default FaqLeft;
