import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return ( <
        header className = "navbar" >
        <
        div className = "navbar-inner" >

        <
        div className = "navbar-logo" >
        THANEKAR < span > DNSB < /span> <
        /div>

        <
        button type = "button"
        className = "menu-toggle"
        onClick = {
            () => setMenuOpen(!menuOpen) } >
        ☰
        <
        /button>

        <
        nav className = { menuOpen ? "navbar-menu open" : "navbar-menu" } >
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
        className = "navbar-contact" >
        Call Now <
        /a> <
        /nav>

        <
        /div> <
        /header>
    );
}

export default Navbar;