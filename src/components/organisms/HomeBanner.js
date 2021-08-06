import HomeBannerLeft from "../molecules/HomeBannerLeft";
import "../../css/homeBanner.css";
import image from "../../assets/home-page/illustration-hero.png";

const HomeBanner = () => {
  return (
    <section className="homeBanner">
      <div className="homeBanner-left">
        <HomeBannerLeft />
      </div>
      <img src={image} alt="phone and application window" />
    </section>
  );
};

export default HomeBanner;
