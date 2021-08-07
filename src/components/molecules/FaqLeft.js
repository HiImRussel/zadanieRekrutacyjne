import FaqButton from "../atoms/FaqButton";
import faqIMG from "../../assets/home-page/illustration-faq.png";

const FaqLeft = () => {
  return (
    <div class="faqLeft">
      <h2>
        Najszęściej zadawane <br />
        pytania
      </h2>
      <FaqButton />
      <img src={faqIMG} alt="men with a tablet in hand" />
    </div>
  );
};

export default FaqLeft;
