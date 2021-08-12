import RealisationSection from "../molecules/Realisation/RealisationSection";
import Banner from "../organisms/Banner";
import BenefitsNewsletter from "../organisms/BenefitsNewsletter";
import CookieNotification from "../organisms/CookieNotification/CookieNotification";
import FAQ from "../organisms/FAQ/FAQ";
import Footer from "../organisms/Footer/Footer";
import Header from "../organisms/Header/Header";
import HomeBanner from "../organisms/HomeBanner/HomeBanner";
import Opinion from "../organisms/Opinion/Opinion";

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
      <RealisationSection />
      <CookieNotification />
    </>
  );
};

export default HomePageTemplate;
