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

    // Automatic image switching
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                return (prevIndex + 1) % amenities.length;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    // Previous image
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => {
            return prevIndex === 0 ?
                amenities.length - 1 :
                prevIndex - 1;
        });
    };

    // Next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            return (prevIndex + 1) % amenities.length;
        });
    };

    return ( <
        section id = "amenities"
        className = "amenities-section" >

        <
        div className = "amenities-slider" >

        { /* Previous Button */ } <
        button className = "amenities-arrow amenities-arrow-left"
        onClick = { handlePrevious }
        aria - label = "Previous amenity" >
        ‹
        <
        /button>

        { /* Single Image */ } <
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

        { /* Next Button */ } <
        button className = "amenities-arrow amenities-arrow-right"
        onClick = { handleNext }
        aria - label = "Next amenity" >
        ›
        <
        /button>

        <
        /div>

        { /* Dots */ } <
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