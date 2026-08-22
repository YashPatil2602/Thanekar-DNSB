import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return ( <
        header className = "navbar" >
        <
        div className = "navbar-container" >

        <
        a href = "#home"
        className = "navbar-logo" >
        <
        img src = "/images/logo.png"
        alt = "Thanekar DNSB" /
        >
        <
        /a>

        <
        nav className = "navbar-links" >
        <
        a href = "#home" > Home < /a> <
        a href = "#about" > About < /a> <
        a href = "#configuration" > Configuration < /a> <
        a href = "#pricing" > Pricing < /a> <
        a href = "#amenities" > Amenities < /a> <
        a href = "#floor-plans" > Floor Plans < /a> <
        a href = "#gallery" > Gallery < /a> <
        a href = "#location" > Location < /a> <
        /nav>

        <
        a href = "tel:+919999999999"
        className = "call-button" >
        Call Now <
        /a>

        <
        button type = "button"
        className = "menu-button"
        onClick = {
            () => setMenuOpen(!menuOpen) } >
        ☰
        <
        /button>

        <
        /div>

        {
            menuOpen && ( <
                div className = "mobile-menu" >

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
                a href = "tel:+919999999999"
                className = "mobile-call"
                onClick = {
                    () => setMenuOpen(false) } >
                Call Now <
                /a>

                <
                /div>
            )
        } <
        /header>
    );
}

export default Navbar;