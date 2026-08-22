import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [showWhatsAppContact, setShowWhatsAppContact] = useState(false);

    return ( <
        header className = "navbar" >
        <
        div className = "navbar-inner" >

        { /* LOGO */ } <
        a href = "#home"
        className = "logo" >
        <
        div className = "logo-main" > THANEKAR < /div> <
        div className = "logo-sub" > DNSB < /div> <
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

        { /* RIGHT SIDE BUTTONS */ } <
        div className = "navbar-buttons" >

        { /* WHATSAPP CONTACT */ } <
        div className = "whatsapp-contact-container" >
        <
        button className = "whatsapp-btn"
        onClick = {
            () => setShowWhatsAppContact(!showWhatsAppContact) }
        title = "WhatsApp" >
        <
        svg viewBox = "0 0 24 24"
        width = "20"
        height = "20"
        fill = "currentColor" >
        <
        path d = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.381-.921 1.226-1.129 1.476-.206.25-.412.275-.709.075-.297-.2-1.257-.463-2.393-1.476-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.51.857-2.813 2.018-3.898 3.381.369 5.577 4.564 9.92 10.139 9.92 1.494 0 2.933-.297 4.226-.859L17 20.854c.56-.183 1.089-.424 1.576-.715.234-.15.447-.313.633-.489l.135-.142c.205-.213.354-.348.476-.479 1.09-1.17 1.794-2.528 2.161-4.004.367-1.476.383-3.058.048-4.661-.335-1.603-1.05-3.158-2.068-4.481-1.019-1.323-2.318-2.375-3.807-3.083-1.489-.707-3.133-.925-4.832-.65-1.699.276-3.266 1.127-4.538 2.447-.814.854-1.443 1.803-1.883 2.848.024.015.047.03.07.047a9.864 9.864 0 013.271-.544Z" / >
        <
        /svg> <
        /button> {
            showWhatsAppContact && ( <
                div className = "whatsapp-contact-tooltip" >
                <
                p > Contact: < /p> <
                a href = "https://wa.me/918390662002"
                target = "_blank"
                rel = "noopener noreferrer" >
                +91 8390662002 <
                /a> <
                /div>
            )
        } <
        /div>

        { /* BROCHURE */ } <
        a href = "/brochure/thanekar-dnsb-brochure.pdf"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "brochure-btn" >
        Brochure <
        /a>

        { /* CALL NOW */ } <
        a href = "tel:+918390662002"
        className = "call-btn" >
        Call Now <
        /a>

        <
        /div>

        <
        /div> <
        /header>
    );
}

export default Navbar;