import footerLogo from "../../assets/logos/logo_empressiaColor.svg";

const RealisationSection = () => {
  return (
    <div className="realisationSection">
      <div className="realisationLeft">
        <span>©</span>
        <a href="...">Polityka prywatności</a>
      </div>
      <div className="realisationRight">
        <span>Realizacja:</span>
        <img src={footerLogo} alt="empresia logo" />
      </div>
    </div>
  );
};

export default RealisationSection;
