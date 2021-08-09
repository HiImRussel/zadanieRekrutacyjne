import footerLogo from "../../assets/logos/logo_empressiaColor.svg";

import "../../css/realisation.css";

const RealisationSection = () => {
  return (
    <div className="realisationSection">
      <div className="realisationLeft">
        <span>© 2020 Wszelkie prawa zastrzezone.</span>
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