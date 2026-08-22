import { useEffect, useState } from "react";
import "./Hero.css";

const heroImages = [
    "/images/hero/hero-1.png",
    "/images/hero/hero-2.png",
    "/images/hero/hero-3.png",
];

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return ( <
        section className = "hero-section"
        id = "home" >

        { /* LEFT - IMAGE SLIDER */ } <
        div className = "hero-slider" >

        {
            heroImages.map((image, index) => ( <
                img key = { image }
                src = { image }
                alt = { `Thanekar DNSB ${index + 1}` }
                className = { `hero-slide ${
              currentSlide === index ? "active" : ""
            }` }
                />
            ))
        }

        { /* Dark Overlay */ } <
        div className = "hero-image-overlay" > < /div>

        { /* Text */ } <
        div className = "hero-content" >

        <
        span className = "hero-small-title" >
        THANEKAR DNSB <
        /span>

        <
        h1 >
        Premium Living <
        br / >
        At Its Finest <
        /h1>

        <
        p >
        Experience modern luxury, comfort and elegance in the heart of Badlapur. <
        /p>

        <
        a href = "#contact"
        className = "hero-button" >
        Enquire Now <
        /a>

        <
        /div>

        { /* Slider Dots */ } <
        div className = "hero-dots" >

        {
            heroImages.map((_, index) => ( <
                button key = { index }
                className = { currentSlide === index ? "active" : "" }
                onClick = {
                    () => setCurrentSlide(index) }
                aria - label = { `Go to slide ${index + 1}` } >
                { index + 1 } <
                /button>
            ))
        }

        <
        /div>

        <
        /div>


        { /* RIGHT - ENQUIRY FORM */ } <
        div className = "hero-form" >

        <
        p className = "form-top-text" >
        THE NEW PRIDE OF BADLAPUR <
        /p>

        <
        h2 >
        THANEKAR DNSB <
        /h2>

        <
        p className = "form-subtitle" >
        Luxury Residential & Commercial Development <
        /p>

        <
        div className = "form-heading" >

        <
        span > < /span>

        <
        strong >
        GET LUXURY WALKTHROUGH <
        /strong>

        <
        span > < /span>

        <
        /div>

        <
        p className = "form-tagline" >
        Tailored For You <
        /p>


        <
        form >

        <
        input type = "text"
        placeholder = "Name" /
        >

        <
        input type = "email"
        placeholder = "Email (optional)" /
        >

        <
        div className = "phone-row" >

        <
        select defaultValue = "India (+91)" >
        <
        option > India(+91) < /option> <
        option > UAE(+971) < /option> <
        option > USA(+1) < /option> <
        option > UK(+44) < /option> <
        /select>

        <
        input type = "tel"
        placeholder = "Mobile Number" /
        >

        <
        /div>


        <
        label className = "consent" >

        <
        input type = "checkbox" / >

        <
        span >
        I consent to the use of provided data in accordance with the privacy policy. <
        /span>

        <
        /label>


        <
        button type = "submit"
        className = "form-submit" >
        Get It Now <
        /button>

        <
        /form>

        <
        /div>

        <
        /section>
    );
}

export default Hero;