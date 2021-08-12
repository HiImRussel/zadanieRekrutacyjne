import circle1 from "../../assets/icons/ui/Ellipse.svg";
import circle2 from "../../assets/icons/ui/Eclipse2.svg";

const HomeBannerLeft = () => {
  const handleMouseEnter = () => {
    document.querySelector(".home-buttons button img").src = circle2;
  };

  const handleMouseLeave = () => {
    document.querySelector(".home-buttons button img").src = circle1;
  };

  return (
    <>
      <h2 className="homeBanner__left__header">
        Konsultacje z lekarzem on-line
      </h2>
      <p className="homeBanner__left__paragraph">
        Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub
        natury intymnej, jesteś we właściwym miejscu. Dzięki naszej pomocy
        zadbasz o zdrowie i piękno swego ciała.
      </p>
      <div className="homeBanner__left__homeButtons">
        <button
          onMouseOver={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="homeBanner__left__homeButtons__button"
        >
          <span className="homeBanner__left__homeButtons__button__span">
            Zarezerwuj termin
          </span>
          <img
            src={circle1}
            alt="circle ico"
            className="homeBanner__left__homeButtons__button__img"
          />
        </button>
        <button className="homeBanner__left__homeButtons__button">
          Jak to działa?
        </button>
      </div>
    </>
  );
};

export default HomeBannerLeft;
