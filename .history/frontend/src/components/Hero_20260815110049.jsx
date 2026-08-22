import React, { useState, useEffect } from "react";
import "./Hero.css";

const images = [
    "/images/hero/hero-1.png",
    "/images/hero/hero-2.png",
    "/images/hero/hero-3.png",
];

function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return ( <
        section className = "hero" >

        {
            images.map((image, index) => ( <
                div key = { image }
                className = { `hero-slide ${
            currentImage === index ? "active" : ""
          }` }
                style = {
                    {
                        backgroundImage: `url("${image}")`,
                    }
                }
                />
            ))
        }

        <
        div className = "hero-overlay" > < /div>

        <
        div className = "hero-content" >
        <
        p className = "hero-small-title" >
        THANEKAR DNSB <
        /p>

        <
        h1 >
        Premium Living <
        br / >
        at Its Finest <
        /h1>

        <
        p className = "hero-description" >
        Experience modern luxury, comfort and elegance in the heart of Thane. <
        /p>

        <
        button className = "hero-button" >
        Enquire Now <
        /button> <
        /div>

        <
        div className = "hero-dots" > {
            images.map((_, index) => ( <
                button key = { index }
                type = "button"
                onClick = {
                    () => setCurrentImage(index) }
                className = {
                    currentImage === index ?
                    "hero-dot active" :
                        "hero-dot"
                }
                aria - label = { `Go to slide ${index + 1}` } >
                < /button>
            ))
        } <
        /div>

        <
        /section>
    );
}

export default Hero;