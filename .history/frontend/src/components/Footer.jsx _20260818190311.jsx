import "./Footer.css";

function Footer() {
    return ( <
        footer className = "footer" >
        <
        div className = "footer-container" >

        <
        div className = "footer-brand" >
        <
        h2 > THANEKAR < /h2> <
        span > DNSB < /span> <
        p >
        Premium residential and commercial development in Badlapur. <
        /p> <
        /div>

        <
        div className = "footer-links" >
        <
        h3 > Quick Links < /h3>

        <
        a href = "#home" > Home < /a> <
        a href = "#about" > About < /a> <
        a href = "#configuration" > Configuration < /a> <
        a href = "#pricing" > Pricing < /a> <
        a href = "#amenities" > Amenities < /a> <
        a href = "#floor-plans" > Floor Plans < /a> <
        a href = "#location" > Location < /a> <
        /div>

        <
        div className = "footer-contact" >
        <
        h3 > Contact Us < /h3>

        <
        a href = "tel:+918390662002" >
        +91 8390662002 <
        /a>

        <
        a href = "mailto:groupthanekar@gmail.com" >
        groupthanekar @gmail.com <
        /a>

        <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noreferrer" >
        WhatsApp <
        /a>

        <
        a href = "https://www.instagram.com/thanekar_group"
        target = "_blank"
        rel = "noreferrer" >
        Instagram <
        /a> <
        /div>

        <
        /div>

        <
        div className = "footer-bottom" >
        <
        p > ©2026 Thanekar DNSB.All Rights Reserved. <
        /p> <
        /div> <
        /footer>
    );
}

export default Footer;