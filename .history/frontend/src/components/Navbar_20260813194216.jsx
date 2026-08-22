function Navbar() {
    return ( <
        header className = "navbar" >
        <
        div className = "navbar-container" >

        <
        a href = "#home"
        className = "navbar-logo" >
        <
        img src = "/images/logo/thanekar-dnsb-logo.png"
        alt = "Thanekar DNSB Tower" /
        >
        <
        /a>

        <
        nav className = "nav-links" >
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
        a href = "tel:8390662002"
        className = "nav-call" >
        Call Now <
        /a> <
        /nav>

        <
        /div> <
        /header>
    );
}

export default Navbar;