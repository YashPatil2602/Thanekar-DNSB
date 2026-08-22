import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const images = [
    "/images/hero/hero-1.png",
    "/images/hero/hero-2.png",
    "/images/hero/hero-3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <section className="hero">

      {/* HERO IMAGE */}
      <img
        src={images[currentImage]}
        alt="Thanekar DNSB"
        className="hero-image"
      />

      {/* BROWN OVERLAY */}
      <div className="hero-overlay"></div>

      {/* HERO CONTENT */}
      <div className="hero-content">

        <p className="hero-subtitle">
          THANEKAR DNSB
        </p>

        <h1>
          Premium Living
          <br />
          <span>at Its Finest</span>
        </h1>

        <div className="gold-line"></div>

        <p className="hero-description">
          Experience modern luxury, comfort and elegance
          in the heart of Thane.
        </p>

        <button
          type="button"
          className="hero-button"
        >
          Enquire Now
        </button>

      </div>

      {/* SLIDER DOTS */}
      <div className="hero-dots">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentImage(index)}
            className={
              currentImage === index
                ? "hero-dot active"
                : "hero-dot"
            }
          >
            {index + 1}
          </button>
        ))}
      </div>

    </section>
  );
}

export default Hero;