import Hero from "./components/Hero";
import About from "./components/About";
import Configuration from "./components/Configuration";
import Pricing from "./components/Pricing";
import Amenities from "./components/Amenities";

function App() {
    return ( <
        >
        <
        Hero / >

        <
        About / >

        <
        Configuration / >

        <
        Pricing / >

        <
        Amenities / >

        { /* GALLERY */ } <
        section id = "gallery"
        className = "gallery-section" >
        <
        div className = "content-container" >

        <
        div className = "section-label" >
        GALLERY <
        /div>

        <
        h2 > Project Gallery < /h2>

        <
        div className = "gallery-grid" >
        <
        img src = "/images/gallery/exterior-1.webp"
        alt = "Thanekar DNSB Exterior"
        className = "gallery-image" /
        >
        <
        /div>

        <
        /div> <
        /section>

        { /* LOCATION */ } <
        section id = "location"
        className = "location-section" >
        <
        div className = "content-container" >

        <
        div className = "section-label" >
        LOCATION <
        /div>

        <
        h2 > Well Connected Location < /h2>

        <
        p >
        Gandhi Chowk, Badlapur East <
        /p>

        <
        a href = "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "location-button" >
        📍Open Google Maps <
        /a>

        <
        /div> <
        /section>

        { /* OFFER */ } <
        section className = "offer-section" >
        <
        div className = "content-container" >

        <
        div className = "section-label" >
        CURRENT OFFER <
        /div>

        <
        h2 > ₹8 Lakh Discount * < /h2>

        <
        p >
        Take advantage of our current limited - time offer. <
        /p>

        <
        /div> <
        /section>

        { /* CONTACT */ } <
        section id = "contact"
        className = "contact-section" >
        <
        div className = "content-container" >

        <
        div className = "section-label" >
        GET IN TOUCH <
        /div>

        <
        h2 >
        Interested in Thanekar DNSB ?
        <
        /h2>

        <
        p >
        Contact our team today
        for pricing,
        floor plans and project details. <
        /p>

        <
        div className = "contact-buttons" >

        <
        a href = "tel:+918390662002"
        className = "contact-button" >
        📞Call Now <
        /a>

        <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "contact-button whatsapp" >
        💬WhatsApp <
        /a>

        <
        a href = "mailto:groupthanekar@gmail.com"
        className = "contact-button" >
        ✉Email Us <
        /a>

        <
        /div>

        <
        div className = "social-links" >
        <
        a href = "https://www.instagram.com/thanekar_group?igsh=ZTNpa3N3YnB0eWVn"
        target = "_blank"
        rel = "noopener noreferrer" >
        📷Follow us on Instagram <
        /a> <
        /div>

        <
        /div> <
        /section>

        { /* FOOTER */ } <
        footer className = "footer" >
        <
        div className = "footer-container" >

        <
        div >
        <
        h3 > THANEKAR DNSB < /h3> <
        p >
        Gandhi Chowk, Badlapur East <
        /p> <
        /div>

        <
        div >
        <
        p > 📞8390662002 < /p> <
        p > ✉groupthanekar @gmail.com < /p> <
        /div>

        <
        div >
        <
        a href = "https://www.instagram.com/thanekar_group?igsh=ZTNpa3N3YnB0eWVn"
        target = "_blank"
        rel = "noopener noreferrer" >
        Instagram <
        /a> <
        /div>

        <
        /div>

        <
        div className = "footer-bottom" > ©2026 Thanekar DNSB.All Rights Reserved. <
        /div> <
        /footer> <
        />
    );
}

export default App;