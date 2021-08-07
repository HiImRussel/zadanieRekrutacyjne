import Banner from "../organisms/Banner";
import FAQ from "../organisms/FAQ";
import Header from "../organisms/Header";
import HomeBanner from "../organisms/HomeBanner";
import Opinion from "../organisms/Opinion";

const HomePageTemplate = ({ navLinks, faqBoxesData }) => {
  return (
    <>
      <Header navLinks={navLinks} />
      <HomeBanner />
      <Banner />
      <FAQ faqBoxesData={faqBoxesData} />
      <Opinion />
    </>
  );
};

export default HomePageTemplate;
