import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import FaqDescription from "../atoms/FaqBoxDescription";
import FaqBoxTitle from "../atoms/FaqBoxTitle";

gsap.registerPlugin(CSSPlugin);

const FaqBox = ({ data }) => {
  const { title, description } = data;

  const handleClickBox = (e) => {
    const description = e.currentTarget.children[1];
    const title = e.currentTarget.children[0].children[0];
    const box = e.currentTarget;
    const icon =
      e.currentTarget.children[0].children[1].children[0].children[0];
    const iconBox = e.currentTarget.children[0].children[1].children[0];

    if (description.style.visibility === "hidden") {
      description.style.visibility = "inherit";
      gsap.to(description, {
        maxHeight: "500px",
        opacity: 1,
        marginTop: "20px",
        color: "#585570",
        visibility: "inherit",
        ease: "Power4.easeIn",
        duration: 0.3,
      });

      title.style.color = "#6557FF";
      box.style.backgroundColor = "white";
      box.style.boxShadow = "2px 4px 12px 3px rgba(0, 0, 0, 0.17)";
      icon.style.fill = "#6557FF";
      iconBox.style.transform = "rotate(180deg)";
    } else {
      gsap.to(description, {
        maxHeight: "0px",
        opacity: 0,
        marginTop: "0px",
        color: "#4432ff",
        visibility: "hidden",
        ease: "Power4.easeIn",
        duration: 0.3,
      });

      title.style.color = "white";
      box.style.backgroundColor = "#4432ff";
      box.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.17)";
      icon.style.fill = "white";
      iconBox.style.transform = "rotate(0deg)";
    }
  };
  return (
    <div className="faqBox" onClick={(e) => handleClickBox(e)}>
      <FaqBoxTitle title={title} />
      <FaqDescription desc={description} />
    </div>
  );
};

export default FaqBox;
