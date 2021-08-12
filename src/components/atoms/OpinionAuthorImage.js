const OpinionAuthorImage = ({ picture }) => {
  return (
    <div className="OpinionSection__slider__opinionBox__authorBox__authorImgBox">
      <img
        src={picture}
        alt="happy client"
        className="OpinionSection__slider__opinionBox__authorBox__authorImgBox__img"
      />
    </div>
  );
};

export default OpinionAuthorImage;
