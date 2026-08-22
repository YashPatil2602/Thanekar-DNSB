import "./Hero.css";

function Hero() {
    return ( <
        section className = "hero-section"
        id = "home" >

        { /* LEFT SIDE - IMAGE */ } <
        div className = "hero-image" >
        <
        img src = "/images/hero/hero-1.png"
        alt = "Thanekar DNSB" /
        >

        <
        div className = "hero-overlay" >
        <
        p > THANEKAR DNSB < /p>

        <
        h1 >
        Premium Living <
        br / >
        At Its Finest <
        /h1>

        <
        span >
        Experience modern luxury, comfort and elegance in the heart of Badlapur. <
        /span>

        <
        button >
        Enquire Now <
        /button> <
        /div> <
        /div>


        { /* RIGHT SIDE - ENQUIRY FORM */ } <
        div className = "hero-form-panel" >

        <
        p className = "hero-small-title" >
        THE NEW PRIDE OF BADLAPUR <
        /p>

        <
        h2 >
        THANEKAR DNSB <
        /h2>

        <
        p className = "hero-description" >
        Luxury Residential & Commercial Development <
        /p>

        <
        div className = "hero-gold-line" >
        <
        span > < /span> <
        strong > GET LUXURY WALKTHROUGH < /strong> <
        span > < /span> <
        /div>

        <
        p className = "hero-tailored" >
        Tailored For You <
        /p>


        { /* FORM */ } <
        form className = "hero-form" >

        <
        input type = "text"
        placeholder = "Name"
        required /
        >

        <
        input type = "email"
        placeholder = "Email (optional)" /
        >

        <
        div className = "phone-row" >

        <
        select defaultValue = "+91" >
        <
        option value = "+91" >
        India(+91) <
        /option>

        <
        option value = "+1" >
        USA(+1) <
        /option>

        <
        option value = "+44" >
        UK(+44) <
        /option> <
        /select>

        <
        input type = "tel"
        placeholder = "Mobile Number"
        required /
        >

        <
        /div>


        <
        label className = "consent" >

        <
        input type = "checkbox"
        required /
        >

        <
        span >
        I consent to the use of provided data in accordance with the privacy policy. <
        /span>

        <
        /label>


        <
        button type = "submit"
        className = "hero-submit" >
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