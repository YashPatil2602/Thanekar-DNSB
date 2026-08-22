import { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return ( <
        header className = "navbar" >
        <
        div className = "navbar-inner" >

        { /* Logo */ } <
        a href = "#home"
        className = "navbar-logo"
        onClick = { closeMenu } >
        <
        img src = { logo }
        alt = "Thanekar DNSB Tower"
        className = "navbar-logo-image" /
        >
        <
        /a>

        { /* Desktop Menu */ } <
        nav className = "navbar-menu" >
        <
        a href = "#home" > Home < /a> <
        a href = "#about" > About < /a> <
        a href = "#configuration" > Configuration < /a> <
        a href = "#pricing" > Pricing < /a> <
        a href = "#amenities" > Amenities < /a> <
        a href = "#floor-plans" > Floor Plans < /a> <
        a href = "#gallery" > Gallery < /a> <
        a href = "#location" > Location < /a>

        <
        a href = "#contact"
        className = "call-button" >
        Call Now <
        /a> <
        /nav>

        { /* Mobile Menu Button */ } <
        button type = "button"
        className = "menu-toggle"
        onClick = {
            () => setMenuOpen(!menuOpen) } >
        ☰
        <
        /button>

        { /* Mobile Menu */ } <
        nav className = { menuOpen ? "mobile-menu open" : "mobile-menu" } >

        <
        a href = "#home"
        onClick = { closeMenu } >
        Home <
        /a>

        <
        a href = "#about"
        onClick = { closeMenu } >
        About <
        /a>

        <
        a href = "#configuration"
        onClick = { closeMenu } >
        Configuration <
        /a>

        <
        a href = "#pricing"
        onClick = { closeMenu } >
        Pricing <
        /a>

        <
        a href = "#amenities"
        onClick = { closeMenu } >
        Amenities <
        /a>

        <
        a href = "#floor-plans"
        onClick = { closeMenu } >
        Floor Plans <
        /a>

        <
        a href = "#gallery"
        onClick = { closeMenu } >
        Gallery <
        /a>

        <
        a href = "#location"
        onClick = { closeMenu } >
        Location <
        /a>

        <
        a href = "#contact"
        className = "mobile-call-button"
        onClick = { closeMenu } >
        Call Now <
        /a>

        <
        /nav>

        <
        /div> <
        /header>
    );
}

export default Navbar;