import Banner from "../organisms/Banner";
import Header from "../organisms/Header";
import HomeBanner from "../organisms/HomeBanner";

const HomePageTemplate = ({ navLinks }) => {
  return (
    <>
      <Header navLinks={navLinks} />
      <HomeBanner />
      <Banner />
    </>
  );
};

export default HomePageTemplate;
