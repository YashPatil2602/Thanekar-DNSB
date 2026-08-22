import { useEffect, useState } from "react";
import "./Amenities.css";

const images = [{
        src: "/images/amenities/Bedroom.png",
        title: "Warm Luxury Bedroom",
    },
    {
        src: "/images/amenities/Car parking.png",
        title: "Premium Car Parking",
    },
    {
        src: "/images/amenities/Kids Play Area.png",
        title: "Kids Play Area",
    },
];

function Amenities() {
    const [currentImage, setCurrentImage] = useState(0);

    // AUTO SWITCH - 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                if (prev === images.length - 1) {
                    return 0;
                }

                return prev + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // PREVIOUS
    const previousImage = () => {
        setCurrentImage((prev) => {
            if (prev === 0) {
                return images.length - 1;
            }

            return prev - 1;
        });
    };

    // NEXT
    const nextImage = () => {
        setCurrentImage((prev) => {
            if (prev === images.length - 1) {
                return 0;
            }

            return prev + 1;
        });
    };

    return ( <
        section id = "amenities"
        className = "amenities-section" >

        { /* HEADING */ } <
        h2 className = "amenities-heading" >
        Amenities <
        /h2>

        { /* SINGLE IMAGE SLIDER */ } <
        div className = "amenities-slider" >

        { /* LEFT BUTTON */ } <
        button className = "amenities-btn left"
        onClick = { previousImage } >
        ‹
        <
        /button>

        { /* ONLY ONE IMAGE */ } <
        div className = "amenities-image-container" >

        <
        img src = { images[currentImage].src }
        alt = { images[currentImage].title }
        className = "amenities-main-image" /
        >

        <
        div className = "amenities-caption" > { images[currentImage].title } <
        /div>

        <
        /div>

        { /* RIGHT BUTTON */ } <
        button className = "amenities-btn right"
        onClick = { nextImage } >
        ›
        <
        /button>

        <
        /div>

        { /* DOTS */ } <
        div className = "amenities-dots" > {
            images.map((image, index) => ( <
                button key = { index }
                className = {
                    currentImage === index ?
                    "amenity-dot active" :
                        "amenity-dot"
                }
                onClick = {
                    () => setCurrentImage(index) }
                />
            ))
        } <
        /div>

        <
        /section>
    );
}

export default Amenities;