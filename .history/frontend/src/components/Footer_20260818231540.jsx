import "./Footer.css";

function Footer() {
    return ( <
        footer className = "footer" >

        <
        div className = "footer-container" >

        { /* BRAND */ } <
        div className = "footer-column brand-column" >
        <
        h2 className = "footer-logo" >
        THANEKAR <
        span > DNSB < /span> <
        /h2>

        <
        p className = "footer-description" >
        Premium residential and commercial development in Badlapur. <
        /p> <
        /div>

        { /* QUICK LINKS */ } <
        div className = "footer-column" >
        <
        h3 > QUICK LINKS < /h3> <
        div className = "gold-line" > < /div>

        <
        ul className = "footer-links" >
        <
        li > < a href = "#home" > Home < /a></li >
        <
        li > < a href = "#about" > About < /a></li >
        <
        li > < a href = "#configuration" > Configuration < /a></li >
        <
        li > < a href = "#pricing" > Pricing < /a></li >
        <
        li > < a href = "#amenities" > Amenities < /a></li >
        <
        li > < a href = "#floor-plans" > Floor Plans < /a></li >
        <
        li > < a href = "#location" > Location < /a></li >
        <
        /ul> <
        /div>

        { /* CONTACT */ } <
        div className = "footer-column" >
        <
        h3 > CONTACT < /h3> <
        div className = "gold-line" > < /div>

        <
        div className = "contact-item" >
        <
        strong > Call Now < /strong> <
        a href = "tel:+918390662002" >
        +91 83906 62002 <
        /a> <
        /div>

        <
        div className = "contact-item" >
        <
        strong > WhatsApp < /strong> <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noopener noreferrer" >
        +91 83906 62002 <
        /a> <
        /div>

        <
        div className = "contact-item" >
        <
        strong > Email Us < /strong> <
        a href = "mailto:groupthanekar@gmail.com" >
        groupthanekar @gmail.com <
        /a> <
        /div>

        <
        div className = "contact-item" >
        <
        strong > Site Address < /strong> <
        p >
        Badlapur, Thane, <
        br / >
        Maharashtra - 421503 <
        /p> <
        /div> <
        /div>

        { /* SOCIAL + BROCHURE */ } <
        div className = "footer-column social-column" >

        <
        h3 > FOLLOW US < /h3> <
        div className = "gold-line" > < /div>

        <
        div className = "social-icons" >

        <
        a href = "https://www.instagram.com/thanekar_group"
        target = "_blank"
        rel = "noopener noreferrer"
        aria - label = "Instagram" >
        Instagram <
        /a>

        <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noopener noreferrer"
        aria - label = "WhatsApp" >
        WhatsApp <
        /a>

        <
        /div>

        <
        div className = "brochure-section" >

        <
        h3 > DOWNLOAD BROCHURE < /h3> <
        div className = "gold-line" > < /div>

        <
        a href = "/brochure/thanekar-dnsb-brochure.pdf"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "footer-brochure-btn" >
        Download Brochure <
        /a>

        <
        /div>

        <
        /div>

        <
        /div>

        { /* BOTTOM */ } <
        div className = "footer-bottom" >

        <
        p > ©2026 Thanekar DNSB.All Rights Reserved. <
        /p>

        <
        div className = "footer-bottom-links" >
        <
        a href = "#" > Privacy Policy < /a> <
        span > | < /span> <
        a href = "#" > Terms & Conditions < /a> <
        /div>

        <
        /div>

        <
        /footer>
    );
}

export default Footer;