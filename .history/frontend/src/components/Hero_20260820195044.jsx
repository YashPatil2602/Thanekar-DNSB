import { useEffect, useState } from "react";
import "./Hero.css";

function Hero({ onEnquire }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroImages = [
        "/images/hero/hero-1.png",
        "/images/hero/hero-2.png",
        "/images/hero/hero-3.png",
    ];

    useEffect(() => {
        const slider = setInterval(() => {
            setCurrentSlide((previousSlide) => (previousSlide + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(slider);
    }, [heroImages.length]);

    return (
        <section className="hero-section" id="home">
            <div className="hero-slider">
                {heroImages.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt={`Thanekar DNSB ${index + 1}`}
                        className={currentSlide === index ? "hero-slide active" : "hero-slide"}
                    />
                ))}

                <div className="hero-image-overlay"></div>

                <div className="hero-content">
                    <span className="hero-small-title">THANEKAR DNSB</span>
                    <h1>
                        Premium Living
                        <br />
                        At Its Finest
                    </h1>
                    <p>Experience modern luxury, comfort and elegance in the heart of Badlapur.</p>
                    <button type="button" className="hero-button" onClick={onEnquire}>
                        Enquire Now
                    </button>
                </div>

                <div className="hero-dots">
                    {heroImages.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            className={currentSlide === index ? "active" : ""}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Show hero slide ${index + 1}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;