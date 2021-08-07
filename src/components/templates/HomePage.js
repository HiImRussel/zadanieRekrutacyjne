import Banner from "../organisms/Banner";
import FAQ from "../organisms/FAQ";
import Header from "../organisms/Header";
import HomeBanner from "../organisms/HomeBanner";

const HomePageTemplate = ({ navLinks }) => {
  return (
    <>
      <Header navLinks={navLinks} />
      <HomeBanner />
      <Banner />
      <FAQ />
    </>
  );
};

export default HomePageTemplate;
