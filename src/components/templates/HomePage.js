import Header from "../organisms/Header";
import HomeBanner from "../organisms/HomeBanner";

const HomePageTemplate = ({ navLinks }) => {
  return (
    <>
      <Header navLinks={navLinks} />
      <HomeBanner />
    </>
  );
};

export default HomePageTemplate;
