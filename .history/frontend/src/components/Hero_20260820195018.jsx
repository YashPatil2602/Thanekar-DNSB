import { useEffect, useState } from "react";
import "./Hero.css";

function Hero({ onEnquire }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroImages = [
        "/images/hero/hero-1.png",
        "/images/hero/hero-2.png",
        "/images/hero/hero-3.png",
    ];

    useEffect(() => {
        const slider = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
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