import "./Navbar.css";

function Navbar() {
    return ( <
        header className = "navbar" >
        <
        div className = "navbar-inner" >

        { /* LOGO */ } <
        a href = "#home"
        className = "logo" >
        <
        span className = "logo-title" > THANEKAR < /span> <
        span className = "logo-subtitle" > DNSB < /span> <
        /a>

        { /* NAVIGATION */ } <
        nav className = "nav-links" >
        <
        a href = "#home" > Home < /a> <
        a href = "#about" > About < /a> <
        a href = "#configuration" > Configuration < /a> <
        a href = "#pricing" > Pricing < /a> <
        a href = "#amenities" > Amenities < /a> <
        a href = "#floor-plans" > Floor Plans < /a> <
        a href = "#location" > Location < /a> <
        /nav>

        { /* CALL NOW */ } <
        a href = "tel:+918390662002"
        className = "call-btn" >
        Call Now <
        /a>

        <
        /div> <
        /header>
    );
}

export default Navbar;