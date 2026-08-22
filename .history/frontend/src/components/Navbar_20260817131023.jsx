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
        className = "navbar-logo" >
        <
        img src = { logo }
        alt = "Thanekar DNSB Tower"
        className = "navbar-logo-image" /
        >
        <
        /a>

        { /* Mobile Menu Button */ } <
        button type = "button"
        className = "menu-toggle"
        onClick = {
            () => setMenuOpen(!menuOpen) } >
        ☰
        <
        /button>

        { /* Navigation Menu */ } <
        nav className = { menuOpen ? "navbar-menu open" : "navbar-menu" } >

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
        className = "call-button"
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