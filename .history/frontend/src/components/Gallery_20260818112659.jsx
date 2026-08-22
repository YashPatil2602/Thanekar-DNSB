import { useEffect, useState } from "react";
import "./Gallery.css";

const galleryImages = [{
        image: "/images/gallery/exterior-1.webp",
        title: "Premium Exterior",
    },
    {
        image: "/images/interiors/lobby-1.png",
        title: "Luxury Lobby",
    },
    {
        image: "/images/interiors/lobby-2.png",
        title: "Elegant Lobby",
    },
];

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatic slider
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex(
            (currentIndex + 1) % galleryImages.length
        );
    };

    const prevSlide = () => {
        setCurrentIndex(
            (currentIndex - 1 + galleryImages.length) %
            galleryImages.length
        );
    };

    return ( <
        section className = "gallery-section"
        id = "gallery" >

        { /* Heading */ } <
        div className = "gallery-heading" >
        <
        span > < /span> <
        h2 > Interiors & Gallery < /h2> <
        span > < /span> <
        /div>

        <
        p className = "gallery-subtitle" >
        Experience the elegance, comfort and premium lifestyle of Thanekar DNSB. <
        /p>

        { /* Slider */ } <
        div className = "gallery-slider" >

        { /* Left Button */ } <
        button className = "gallery-arrow gallery-left"
        onClick = { prevSlide } >
        ‹
        <
        /button>

        { /* Image */ } <
        div className = "gallery-image-wrapper" >
        <
        img src = { galleryImages[currentIndex].image }
        alt = { galleryImages[currentIndex].title }
        className = "gallery-image" /
        >

        <
        div className = "gallery-overlay" >
        <
        h3 > { galleryImages[currentIndex].title } <
        /h3> <
        /div> <
        /div>

        { /* Right Button */ } <
        button className = "gallery-arrow gallery-right"
        onClick = { nextSlide } >
        ›
        <
        /button>

        <
        /div>

        { /* Dots */ } <
        div className = "gallery-dots" > {
            galleryImages.map((_, index) => ( <
                button key = { index }
                className = {
                    currentIndex === index ?
                    "gallery-dot active" :
                        "gallery-dot"
                }
                onClick = {
                    () => setCurrentIndex(index) } >
                < /button>
            ))
        } <
        /div>

        <
        /section>
    );
}

export default Gallery;