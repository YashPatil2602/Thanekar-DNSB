import { useEffect, useState } from "react";

function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/images/hero/hero-1.png",
        "/images/hero/hero-2.png",
        "/images/hero/hero-3.png"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage(function(prev) {
                return (prev + 1) % images.length;
            });
        }, 4000);

        return function() {
            clearInterval(timer);
        };
    }, []);

    return ( <
        section className = "hero" >

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
        p className = "hero-subtitle" >
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
        button type = "button"
        className = "hero-button" >
        Enquire Now <
        /button>

        <
        /div>

        <
        div className = "hero-dots" >

        {
            images.map(function(_, index) {
                return ( <
                    button key = { index }
                    type = "button"
                    onClick = {
                        function() {
                            setCurrentImage(index);
                        }
                    }
                    className = {
                        currentImage === index ?
                        "hero-dot active" :
                            "hero-dot"
                    } >
                    { index + 1 } <
                    /button>
                );
            })
        }

        <
        /div>

        <
        /section>
    );
}

export default Hero;