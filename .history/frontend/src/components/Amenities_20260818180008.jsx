import { useEffect, useState } from "react";
import "./Amenities.css";

const amenities = [{
        image: "/images/amenities/Bedroom.png",
        title: "Bedroom",
    },
    {
        image: "/images/amenities/Car parking.png",
        title: "Car Parking",
    },
    {
        image: "/images/amenities/Kids Play Area.png",
        title: "Kids Play Area",
    },
    {
        image: "/images/amenities/Living.png",
        title: "Living",
    },
    {
        image: "/images/amenities/Play Ground.png",
        title: "Play Ground",
    },
    {
        image: "/images/amenities/Solar Panel.png",
        title: "Solar Panel",
    },
    {
        image: "/images/amenities/Warm Luxury Bedroom at Dusk.png",
        title: "Warm Luxury Bedroom at Dusk",
    },
];

function Amenities() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % amenities.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    const previousImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? amenities.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % amenities.length);
    };

    return ( <
        section id = "amenities"
        className = "amenities-section" >

        <
        div className = "amenities-slider" >

        <
        button className = "amenities-arrow amenities-arrow-left"
        onClick = { previousImage }
        aria - label = "Previous amenity" >
        ‹
        <
        /button>

        <
        div className = "amenities-image-wrapper" >

        <
        img key = { amenities[currentIndex].image }
        src = { amenities[currentIndex].image }
        alt = { amenities[currentIndex].title }
        className = "amenities-image" /
        >

        <
        div className = "amenities-overlay" >
        <
        h2 > { amenities[currentIndex].title } < /h2> <
        /div>

        <
        /div>

        <
        button className = "amenities-arrow amenities-arrow-right"
        onClick = { nextImage }
        aria - label = "Next amenity" >
        ›
        <
        /button>

        <
        /div>

        <
        div className = "amenities-dots" > {
            amenities.map((item, index) => ( <
                button key = { index }
                onClick = {
                    () => setCurrentIndex(index) }
                className = {
                    index === currentIndex ?
                    "amenity-dot active" :
                        "amenity-dot"
                }
                aria - label = { `Show ${item.title}` }
                />
            ))
        } <
        /div>

        <
        /section>
    );
}

export default Amenities;