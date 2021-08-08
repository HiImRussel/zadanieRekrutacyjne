import Banner from "../organisms/Banner";
import BenefitsNewsletter from "../organisms/BenefitsNewsletter";
import FAQ from "../organisms/FAQ";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import HomeBanner from "../organisms/HomeBanner";
import Opinion from "../organisms/Opinion";

const HomePageTemplate = ({
  navLinks,
  faqBoxesData,
  userOpinions,
  benefitsData,
  newsletterData,
  footerLogos,
  footerLinks,
}) => {
  return (
    <>
      <Header navLinks={navLinks} />
      <HomeBanner />
      <Banner />
      <FAQ faqBoxesData={faqBoxesData} />
      <Opinion userOpinions={userOpinions} />
      <BenefitsNewsletter
        benefitsData={benefitsData}
        newsletterData={newsletterData}
      />
      <Footer
        footerLogos={footerLogos}
        navLinks={navLinks}
        footerLinks={footerLinks}
      />
    </>
  );
};

export default HomePageTemplate;
