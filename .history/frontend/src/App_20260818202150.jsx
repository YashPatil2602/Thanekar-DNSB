import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Configuration from "./components/Configuration";
import Pricing from "./components/Pricing";
import Amenities from "./components/Amenities";
import FloorPlans from "./components/FloorPlans";
import Location from "./components/Location";

function App() {
    return ( <
        > { /* NAVBAR */ } <
        Navbar / >

        { /* WEBSITE CONTENT */ } <
        main >

        { /* HOME */ } <
        section id = "home" >
        <
        Hero / >
        <
        /section>

        { /* ABOUT */ } <
        section id = "about" >
        <
        About / >
        <
        /section>

        { /* CONFIGURATION */ } <
        section id = "configuration" >
        <
        Configuration / >
        <
        /section>

        { /* PRICING */ } <
        section id = "pricing" >
        <
        Pricing / >
        <
        /section>

        { /* AMENITIES */ } <
        section id = "amenities" >
        <
        Amenities / >
        <
        /section>

        { /* FLOOR PLANS */ } <
        section id = "floor-plans" >
        <
        FloorPlans / >
        <
        /section>

        { /* LOCATION */ } <
        section id = "location" >
        <
        Location / >
        <
        /section>

        <
        /main>

        { /* FOOTER */ } <
        footer className = "site-footer" >

        <
        div className = "footer-container" >

        { /* BRAND */ } <
        div className = "footer-brand" >
        <
        h2 > THANEKAR < /h2> <
        h4 > DNSB < /h4>

        <
        p >
        Premium residential and commercial development in Badlapur. <
        /p> <
        /div>

        { /* QUICK LINKS */ } <
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

        { /* CONTACT */ } <
        div className = "footer-contact" >
        <
        h3 > Contact < /h3>

        <
        a href = "tel:+918390662002" >
        Call Now <
        /a>

        <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noreferrer" >
        WhatsApp <
        /a>

        <
        a href = "mailto:groupthanekar@gmail.com" >
        Email Us <
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

        { /* COPYRIGHT */ } <
        div className = "footer-bottom" >
        <
        p > ©2026 Thanekar DNSB.All Rights Reserved. <
        /p> <
        /div>

        <
        /footer> <
        />
    );
}

export default App;