import Slider from "react-slick";
import OpinionBox from "../molecules/OpinionBox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OpinionSlider = ({ userOpinions }) => {
  const Opinions = userOpinions.map((opinion) => (
    <OpinionBox
      key={opinion.id.value}
      name={opinion.name.first}
      picture={opinion.picture.thumbnail}
    />
  ));

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider">
      <Slider {...settings}>{Opinions.length > 0 && Opinions}</Slider>
    </div>
  );
};

export default OpinionSlider;
