import HomeBannerLeft from "../molecules/HomeBannerLeft";
import "../../css/homeBanner.css";

const HomeBanner = () => {
  return (
    <section className="homeBanner">
      <div className="homeBanner-left">
        <HomeBannerLeft />
      </div>
    </section>
  );
};

export default HomeBanner;
