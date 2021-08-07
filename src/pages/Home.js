import HomePageTemplate from "../components/templates/HomePage";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [userOpinions, setUserOpinions] = useState([]);

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

  const faqBoxes = [
    {
      id: 0,
      title: "Jakie są korzyści teleporady lekarskiej na naszym serwisie?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
      id: 1,
      title: "Jak zrealizuję konsultację?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
    {
      id: 2,
      title: "Czy jest możliwość odwołania wcześniej zarezerwowanej wizyty?",
      description:
        "W przypadkach losowych gdy nie mogą Państwo zrealizować wizyty w umówionym terminie isnieje możliwość zmiany daty wizyty bądź jej odwołania do 24h przed planowanym terminem. Dokonają Państwo tego za pomocą linka przesłanego w potwierdzeniu rezerwacji na podany przez Państwa adres e-mail.",
    },
    {
      id: 3,
      title: "Co się dzieje w przypadku problemów technicznych?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
    },
  ];

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((res) => {
      const opinions = res.data.results;
      setUserOpinions(opinions);
    });
  }, []);

  return (
    <HomePageTemplate
      navLinks={navLinks}
      faqBoxesData={faqBoxes}
      userOpinions={userOpinions}
    />
  );
};

export default HomePage;
