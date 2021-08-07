import OpinionText from "../atoms/OpinionText";
import OpinionTop from "./OpinionTop";
import OpinionAuthor from "./OpinonAuthor";

const OpinionBox = ({ name, picture }) => {
  return (
    <div className="OpinionBox">
      <OpinionTop />
      <OpinionText />
      <OpinionAuthor name={name} picture={picture} />
    </div>
  );
};

export default OpinionBox;
