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
];

function Amenities() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatic image switch every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                return (prevIndex + 1) % amenities.length;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    // Previous
    const previousImage = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return amenities.length - 1;
            }

            return prevIndex - 1;
        });
    };

    // Next
    const nextImage = () => {
        setCurrentIndex((prevIndex) => {
            return (prevIndex + 1) % amenities.length;
        });
    };

    return ( <
        section id = "amenities"
        className = "amenities-section" >

        <
        div className = "amenities-slider" >

        { /* LEFT ARROW */ } <
        button className = "amenities-arrow amenities-arrow-left"
        onClick = { previousImage } >
        ‹
        <
        /button>

        { /* ONE IMAGE */ } <
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
        h2 > { amenities[currentIndex].title } <
        /h2> <
        /div>

        <
        /div>

        { /* RIGHT ARROW */ } <
        button className = "amenities-arrow amenities-arrow-right"
        onClick = { nextImage } >
        ›
        <
        /button>

        <
        /div>

        { /* DOTS */ } <
        div className = "amenities-dots" >

        {
            amenities.map((item, index) => ( <
                button key = { index }
                onClick = {
                    () => setCurrentIndex(index) }
                className = {
                    currentIndex === index ?
                    "amenity-dot active" :
                        "amenity-dot"
                } >
                < /button>
            ))
        }

        <
        /div>

        <
        /section>
    );
}

export default Amenities;