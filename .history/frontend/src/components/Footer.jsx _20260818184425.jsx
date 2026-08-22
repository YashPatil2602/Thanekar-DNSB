import "./Footer.css";

function Footer() {
    return ( <
        footer className = "footer" >

        <
        div className = "footer-container" >

        { /* COMPANY */ } <
        div className = "footer-column footer-company" >
        <
        h2 > THANEKAR < /h2> <
        h4 > DNSB < /h4>

        <
        p >
        Premium residential and commercial development offering modern luxury, comfort and convenience in Badlapur. <
        /p> <
        /div>

        { /* QUICK LINKS */ } <
        div className = "footer-column" >
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

        { /* PROJECT */ } <
        div className = "footer-column" >
        <
        h3 > Project < /h3>

        <
        a href = "#about" > About Project < /a> <
        a href = "#configuration" > Configuration < /a> <
        a href = "#pricing" > Pricing < /a> <
        a href = "#amenities" > Amenities < /a> <
        a href = "#floor-plans" > Floor Plans < /a> <
        /div>

        { /* LOCATION */ } <
        div className = "footer-column" >
        <
        h3 > Location < /h3>

        <
        p >
        Badlapur, <
        br / >
        Maharashtra, India <
        /p>

        <
        a href = "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "footer-map-link" >
        View on Google Maps <
        /a> <
        /div>

        <
        /div>

        { /* BOTTOM */ } <
        div className = "footer-bottom" >

        <
        p > ©2026 Thanekar DNSB.All Rights Reserved. <
        /p>

        <
        p >
        Designed & Developed with care. <
        /p>

        <
        /div>

        <
        /footer>
    );
}

export default Footer;