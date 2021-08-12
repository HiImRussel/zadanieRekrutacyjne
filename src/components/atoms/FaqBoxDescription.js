const FaqDescription = ({ desc }) => {
  return (
    <p
      className="faq__boxes__box__description"
      style={{ visibility: "hidden", opacity: 0, maxHeight: "0px" }}
    >
      {desc}
    </p>
  );
};

export default FaqDescription;
