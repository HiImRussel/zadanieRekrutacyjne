const HomeBannerLeft = () => {
  return (
    <>
      <h2>Konsultracje z lekarzem on-line</h2>
      <p>
        Jeżeli potrzebujesz pomocy związanej ze skórą, włosami, paznokciami lub
        natury intymnej, jesteś we właściwym miejscu. Dzięki naszej pomocy
        zadbasz o zdrowie i piękno swego ciała.
      </p>
      <div className="home-buttons">
        <button>
          <span>Zarezerwuj termin</span>
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM3.54481 14C3.54481 19.7742 8.22576 24.4552 14 24.4552C19.7742 24.4552 24.4552 19.7742 24.4552 14C24.4552 8.22576 19.7742 3.54481 14 3.54481C8.22576 3.54481 3.54481 8.22576 3.54481 14Z"
              fill="white"
            />
          </svg>
        </button>
        <button>Jak to działa?</button>
      </div>
    </>
  );
};

export default HomeBannerLeft;
