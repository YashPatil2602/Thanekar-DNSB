import { useEffect, useState } from "react";

import "./Amenities.css";

const amenities = [
    {
        image: "/images/amenities/optimized/Bedroom.png",
        title: "Bedroom",
    },
    {
        image: "/images/amenities/optimized/Car parking.png",
        title: "Car Parking",
    },
    {
        image: "/images/amenities/optimized/Kids Play Area.png",
        title: "Kids Play Area",
    },
    {
        image: "/images/amenities/optimized/Living.png",
        title: "Living",
    },
    {
        image: "/images/amenities/optimized/Play Ground.png",
        title: "Play Ground",
    },
    {
        image: "/images/amenities/optimized/Solar Panel.png",
        title: "Solar Panel",
    },
];

function Amenities() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(
                (previousIndex) =>
                    (previousIndex + 1) % amenities.length
            );
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const nextIndex =
            (currentIndex + 1) % amenities.length;

        const nextImage = new Image();
        nextImage.src = amenities[nextIndex].image;
    }, [currentIndex]);

    const previousImage = () => {
        setCurrentIndex((previousIndex) =>
            previousIndex === 0
                ? amenities.length - 1
                : previousIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex(
            (previousIndex) =>
                (previousIndex + 1) % amenities.length
        );
    };

    return (
        <section
            id="amenities"
            className="amenities-section"
        >
            <div className="amenities-slider">

                <button
                    type="button"
                    className="amenities-arrow amenities-arrow-left"
                    onClick={previousImage}
                    aria-label="Previous amenity"
                >
                    ‹
                </button>

                <div className="amenities-image-wrapper">
                    <img
                        key={amenities[currentIndex].image}
                        src={amenities[currentIndex].image}
                        alt={amenities[currentIndex].title}
                        className="amenities-image"
                        decoding="async"
                    />

                    <div className="amenities-overlay">
                        <h2>
                            {amenities[currentIndex].title}
                        </h2>
                    </div>
                </div>

                <button
                    type="button"
                    className="amenities-arrow amenities-arrow-right"
                    onClick={nextImage}
                    aria-label="Next amenity"
                >
                    ›
                </button>

            </div>

            <div className="amenities-dots">
                {amenities.map((item, index) => (
                    <button
                        key={item.image}
                        type="button"
                        onClick={() =>
                            setCurrentIndex(index)
                        }
                        className={
                            currentIndex === index
                                ? "amenity-dot active"
                                : "amenity-dot"
                        }
                        aria-label={`Show ${item.title}`}
                    />
                ))}
            </div>
        </section>
    );
}

export default Amenities;
