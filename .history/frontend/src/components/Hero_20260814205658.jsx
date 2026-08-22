import { useEffect, useState } from "react";

function Hero() {
    const images = [
        "/images/hero1.jpg",
        "/images/hero2.jpg",
        "/images/hero3.jpg",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return ( <
        section className = "hero" >

        <
        img src = { images[currentImage] }
        alt = { `Thanekar DNSB ${currentImage + 1}` }
        className = "hero-image" /
        >

        <
        div className = "hero-overlay" >
        <
        div className = "hero-content" >
        <
        h1 > Thanekar DNSB < /h1>

        <
        p >
        Premium Living at a Prime Location <
        /p>

        <
        button type = "button"
        className = "hero-button" >
        Explore Project <
        /button> <
        /div> <
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
                aria - label = { `Go to slide ${index + 1}` }
                />
            ))
        } <
        /div>

        <
        /section>
    );
}

export default Hero;