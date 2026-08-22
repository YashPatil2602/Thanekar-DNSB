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

        return () => clearInterval(timer);
    }, []);

    return ( <
        section className = "hero"
        id = "home" >

        { /* Building Image */ } <
        div className = "hero-image-wrapper" >
        <
        img src = { images[currentImage] }
        alt = "Thanekar DNSB"
        className = "hero-image" /
        >
        <
        /div>

        { /* Dark Overlay */ } <
        div className = "hero-overlay" > < /div>

        { /* Left Content */ } <
        div className = "hero-content" >

        <
        p className = "hero-subtitle" >
        THANEKAR DNSB <
        /p>

        <
        h1 >
        Premium Living <
        br / >
        <
        span > At Its Finest < /span> <
        /h1>

        <
        p className = "hero-description" >
        Experience modern luxury, comfort and elegance in the heart of Badlapur. <
        /p>

        <
        button type = "button"
        className = "hero-button"
        onClick = {
            () => {
                window.location.href = "#contact";
            }
        } >
        Enquire Now <
        /button>

        <
        /div>

        { /* Slider Dots */ } <
        div className = "hero-dots" >

        {
            images.map((_, index) => ( <
                button key = { index }
                type = "button"
                onClick = {
                    () => setCurrentImage(index) }
                className = {
                    currentImage === index ?
                    "hero-dot active" :
                        "hero-dot"
                } >
                { index + 1 } <
                /button>
            ))
        }

        <
        /div>

        <
        /section>
    );
}

export default Hero;