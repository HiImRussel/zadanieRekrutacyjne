import OpinionAuthorImage from "../atoms/OpinionAuthorImage";
import OpinionAuthorName from "../atoms/OpinionAuthorName";

const OpinionAuthor = ({ name, picture }) => {
  return (
    <div className="OpinionSection__slider__opinionBox__authorBox">
      <OpinionAuthorImage picture={picture} />
      <OpinionAuthorName name={name} />
    </div>
  );
};

export default OpinionAuthor;
