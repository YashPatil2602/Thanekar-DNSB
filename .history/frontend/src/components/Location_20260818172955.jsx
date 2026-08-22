import "./Location.css";

function Location() {
    return ( <
        section id = "location"
        className = "location-section" >
        <
        div className = "location-container" >

        <
        div className = "location-info" >
        <
        p className = "location-subtitle" > VISIT US < /p>

        <
        h2 > Location < /h2>

        <
        p className = "location-text" >
        Find Thanekar DNSB at its prime location in Badlapur. <
        /p>

        <
        div className = "contact-item" >
        <
        strong > Call Us < /strong> <
        a href = "tel:+918390662002" >
        8390662002 <
        /a> <
        /div>

        <
        div className = "contact-item" >
        <
        strong > WhatsApp < /strong> <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noopener noreferrer" >
        8390662002 <
        /a> <
        /div>

        <
        div className = "contact-item" >
        <
        strong > Email < /strong> <
        a href = "mailto:groupthanekar@gmail.com" >
        groupthanekar @gmail.com <
        /a> <
        /div>

        <
        a href = "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac"
        target = "_blank"
        rel = "noopener noreferrer"
        className = "location-btn" >
        Open Google Maps <
        /a> <
        /div>

        <
        div className = "map-box" >
        <
        iframe title = "Thanekar DNSB Location"
        src = "https://www.google.com/maps?q=Badlapur,Maharashtra&output=embed"
        loading = "lazy"
        allowFullScreen >
        < /iframe> <
        /div>

        <
        /div> <
        /section>
    );
}

export default Location;