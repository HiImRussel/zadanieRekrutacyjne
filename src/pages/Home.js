import HomePageTemplate from "../components/templates/HomePage";
import axios from "axios";
import { useEffect, useState } from "react";

import reservation from "../assets/icons/seo/reservation.svg";
import dicretia from "../assets/icons/seo/dicretia.svg";
import video from "../assets/icons/seo/video.svg";
import receipt from "../assets/icons/seo/e-receipt.svg";
import quickness from "../assets/icons/seo/quickness.svg";
import diagnosis from "../assets/icons/seo/diagnosis.svg";
import checked from "../assets/icons/ui/check.svg";

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

  const benefitsData = [
    {
      id: 0,
      icon: reservation,
      title: "Rezerwacja on-line",
      text: "Nie musisz dzwonić i pisać maili wystarczy lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      id: 1,
      icon: dicretia,
      title: "Pełna dyskrecja",
      text: "Możesz mieć pewność nec lacinia orci. Suspendisse non urna suismod, venenatis urna sed, faucibus magna.",
    },
    {
      id: 2,
      icon: video,
      title: "Konsultacja video",
      text: "Dla Waszej wygody lass aptet taciti sociosqu ad litara torquent per conubia nastra, per inceptos himenaeo.",
    },
    {
      id: 3,
      icon: receipt,
      title: "E-recepta",
      text: "W ramach konsultacji mogę wystawić Tobie raesent fermentum vestibulum mi, sit amet scelerisque ex ultrices at.",
    },
    {
      id: 4,
      icon: quickness,
      title: "Szybkość i prostota",
      text: "Jeszcze nie było tak rasent nec ullamcorper lacus. Pellentesque non ipsum eget est fermentum noc.",
    },
    {
      id: 5,
      icon: diagnosis,
      title: "Diagnoza",
      text: "Od lat zajmuję się dermatologią, felis massa, aliquam sit amet justo eget, gravida vestibulum magna. Aenean hen.",
    },
  ];

  const newsletterData = [
    { id: 0, icon: checked, text: "e-recepta i e-zwolnienie" },
    { id: 1, icon: checked, text: "video konsultacja" },
    { id: 2, icon: checked, text: "szybkość i prostota" },
    { id: 3, icon: checked, text: "rezerwacja terminu on-line" },
    { id: 4, icon: checked, text: "kontakt przez Skype lub WhatsApp" },
    { id: 5, icon: checked, text: "pełna dyskrecja" },
    { id: 6, icon: checked, text: "konsultacja bez zakładania konta" },
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
      benefitsData={benefitsData}
      newsletterData={newsletterData}
    />
  );
};

export default HomePage;
