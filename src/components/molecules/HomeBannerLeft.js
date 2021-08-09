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
      <h2>Konsultracje z lekarzem on-line</h2>
      <p>
        Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub
        natury intymnej, jesteś we właściwym miejscu. Dzięki naszej pomocy
        zadbasz o zdrowie i piękno swego ciała.
      </p>
      <div className="home-buttons">
        <button onMouseOver={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span>Zarezerwuj termin</span>
          <img src={circle1} alt="circle ico" />
        </button>
        <button>Jak to działa?</button>
      </div>
    </>
  );
};

export default HomeBannerLeft;
