import { useEffect, useState } from "react";

function Hero() {
    const images = [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80"
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => {
                if (prev === images.length - 1) {
                    return 0;
                }

                return prev + 1;
            });
        }, 4000);

        return () => {
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
        /section>
    );
}

export default Hero;