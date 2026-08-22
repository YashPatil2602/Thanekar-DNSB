import "./About.css";

function About() {
    return ( <
        section className = "about-section"
        id = "about" >

        <
        div className = "about-container" >

        { /* LEFT - TEXT */ } <
        div className = "about-content" >

        <
        p className = "about-small-title" >
        ABOUT THANЕKAR DNSB <
        /p>

        <
        h2 >
        A Perfect Blend of <
        br / >
        <
        span > Comfort & Connectivity < /span> <
        /h2>

        <
        div className = "about-line" > < /div>

        <
        p >
        Thanekar DNSB is a thoughtfully designed residential and commercial development in Badlapur, offering modern homes and premium retail shops in a well - connected location. <
        /p>

        <
        p >
        The project features well - planned residences, quality construction, lifestyle amenities, landscaped open spaces,
        and commercial spaces designed
        for business growth. <
        /p>

        <
        p >
        With easy access to schools, hospitals, railway stations,
        and everyday conveniences, Thanekar DNSB provides an ideal destination
        for comfortable living and smart investment. <
        /p>

        <
        p >
        Whether you 're looking for your dream home or a commercial
        shop
        for your business, Thanekar DNSB offers the perfect blend of convenience, connectivity, and long - term value. <
        /p>

        <
        /div>

        { /* RIGHT - IMAGE */ } <
        div className = "about-image" >
        <
        img src = "/images/hero/hero-2.png"
        alt = "Thanekar DNSB" /
        >
        <
        /div>

        <
        /div>

        <
        /section>
    );
}

export default About;