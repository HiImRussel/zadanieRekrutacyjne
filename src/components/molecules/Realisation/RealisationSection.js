import footerLogo from "../../../assets/logos/logo_empressiaColor.svg";

import "./realisation.css";

const RealisationSection = () => {
  return (
    <section className="realisationSection">
      <div className="realisationSection__left">
        <span>© 2020 Wszelkie prawa zastrzezone.</span>
        <a href="..." className="realisationSection__left__link">
          Polityka prywatności
        </a>
      </div>
      <div className="realisationSection__right">
        <span>Realizacja:</span>
        <img
          src={footerLogo}
          alt="empresia logo"
          className="realisationSection__right__img"
        />
      </div>
    </section>
  );
};

export default RealisationSection;
