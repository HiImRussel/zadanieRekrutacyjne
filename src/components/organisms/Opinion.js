import OpinionSlider from "./OpinionSlider";
import "../../css/opinion.css";

const Opinion = ({ userOpinions }) => {
  return (
    <section className="OpinionSection">
      <h1>Co mówią zadowoleni klienci</h1>
      <OpinionSlider userOpinions={userOpinions} />
    </section>
  );
};

export default Opinion;
