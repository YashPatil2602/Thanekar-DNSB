import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return ( <
        header className = "navbar" >
        <
        div className = "navbar-inner" >

        { /* LOGO */ } <
        a href = "#home"
        className = "navbar-logo" >
        THANEKAR < span > DNSB < /span> <
        /a>

        { /* MOBILE MENU BUTTON */ } <
        button type = "button"
        className = "menu-toggle"
        onClick = {
            () => setMenuOpen(!menuOpen) }
        aria - label = "Toggle navigation" >
        ☰
        <
        /button>

        { /* NAVIGATION */ } <
        nav className = { `navbar-menu ${menuOpen ? "open" : ""}` } >

        <
        a href = "#home"
        onClick = {
            () => setMenuOpen(false) } >
        Home <
        /a>

        <
        a href = "#about"
        onClick = {
            () => setMenuOpen(false) } >
        About <
        /a>

        <
        a href = "#configuration"
        onClick = {
            () => setMenuOpen(false) } >
        Configuration <
        /a>

        <
        a href = "#pricing"
        onClick = {
            () => setMenuOpen(false) } >
        Pricing <
        /a>

        <
        a href = "#amenities"
        onClick = {
            () => setMenuOpen(false) } >
        Amenities <
        /a>

        <
        a href = "#floor-plans"
        onClick = {
            () => setMenuOpen(false) } >
        Floor Plans <
        /a>

        <
        a href = "#gallery"
        onClick = {
            () => setMenuOpen(false) } >
        Gallery <
        /a>

        <
        a href = "#location"
        onClick = {
            () => setMenuOpen(false) } >
        Location <
        /a>

        <
        a href = "#contact"
        className = "navbar-contact" >
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