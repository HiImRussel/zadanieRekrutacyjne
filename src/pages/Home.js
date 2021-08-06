import HomePageTemplate from "../components/templates/HomePage";

const HomePage = () => {
  const navLinks = [
    {
      id: 0,
      link: "/about",
      text: "O mnie",
    },
    {
      id: 1,
      link: "/opinions",
      text: "Opinie",
    },
    {
      id: 2,
      link: "/faq",
      text: "FAQ",
    },
    {
      id: 3,
      link: "/galerry",
      text: "Galeria",
    },
    {
      id: 4,
      link: "/blog",
      text: "Blog",
    },
    {
      id: 5,
      link: "/contact",
      text: "Kontakt",
    },
  ];
  return <HomePageTemplate navLinks={navLinks} />;
};

export default HomePage;
