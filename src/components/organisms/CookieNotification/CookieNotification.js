import "./cookie.css";

import gsap from "gsap/gsap-core";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useEffect } from "react";
import { Power4 } from "gsap";

gsap.registerPlugin(CSSPlugin);

const CookieNotification = () => {
  const handleCloseCookiesClick = () => {
    gsap.to(".cookie-notification", { opacity: 0, ease: Power4.easeIn });
  };

  useEffect(() => {
    gsap.fromTo(
      ".cookie-notification",
      { opacity: 0, ease: Power4.easeIn, duration: 0.3 },
      { opacity: 1, ease: Power4.easeIn, duration: 0.3 }
    );
  }, []);
  return (
    <section className="cookie-notification">
      <span>
        Ta strona korzysta z <a href="....">ciasteczek.</a> Dalsze korzystanie
        ze strony oznacza, że zgadzasz się na ich użycie
      </span>
      <button onClick={handleCloseCookiesClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
          <path
            fill="#666"
            d="M1.93320492,0.273318957 L5.997,4.313 L9.98068235,0.330151424 C10.4169633,-0.0781106142 11.0948555,-0.0788840618 11.5320669,0.328381357 C11.9692783,0.735646777 12.0165239,1.41189109 11.6401904,1.87599455 L7.604,5.911 L11.6401904,9.92347197 C11.8697371,10.1383802 12,10.4387785 12,10.753226 C12,11.0676735 11.8697371,11.3680718 11.6401904,11.58298 C11.4024817,11.7896887 11.089649,11.888478 10.7763369,11.8557759 C10.4781484,11.8545203 10.1923954,11.7361369 9.98068235,11.5261476 L5.985,7.53 L1.93320492,11.58298 C1.7126266,11.7723075 1.42789389,11.8699302 1.13755037,11.8557759 C0.843351202,11.8728996 0.554001198,11.7750912 0.33052933,11.58298 C-0.110176443,11.1396442 -0.110176443,10.4236403 0.33052933,9.98030444 L4.382,5.928 L0.33052933,1.87599455 C-0.0556777455,1.42501723 -0.0297115295,0.752764279 0.390131561,0.332921188 C0.809974652,-0.0869219028 1.48222761,-0.112888119 1.93320492,0.273318957 Z"
          />
        </svg>
      </button>
    </section>
  );
};

export default CookieNotification;
