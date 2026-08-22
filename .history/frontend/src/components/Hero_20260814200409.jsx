import { useEffect, useState } from "react";

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
        section id = "home"
        className = "hero-section" >
        <
        div className = "hero-image-container" >

        <
        img src = "/images/logo/thanekar-dnsb-logo.png"
        alt = "Thanekar DNSB Logo"
        className = "site-logo" /
        >

        <
        img src = { images[currentImage] }
        alt = "Thanekar DNSB"
        className = "hero-image" /
        >

        <
        div className = "hero-overlay" > < /div>

        <
        div className = "hero-content" >
        <
        div className = "section-label" >
        PREMIUM RESIDENTIAL & amp; COMMERCIAL DEVELOPMENT <
        /div>

        <
        h1 > Thanekar DNSB < /h1>

        <
        h2 > Modern Living.Smart Investment. < /h2>

        <
        p > Gandhi Chowk, Badlapur East < /p>

        <
        div className = "hero-buttons" >

        <
        a href = "tel:+918390662002"
        className = "hero-button" >
        📞Call Now <
        /a>

        <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "hero-button whatsapp" >
        💬WhatsApp <
        /a>

        <
        a href = "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "hero-button" >
        📍View Location <
        /a>

        <
        /div> <
        /div>

        <
        div className = "hero-dots" > {
            images.map((_, index) => ( <
                button key = { index }
                type = "button"
                onClick = {
                    () => setCurrentImage(index) }
                className = { currentImage === index ? "active" : "" }
                aria - label = { "Go to slide " + (index + 1) } >
                < /button>
            ))
        } <
        /div>

        <
        /div> <
        /section>
    );
}

export default Hero;