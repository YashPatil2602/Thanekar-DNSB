import "./Location.css";

function Location() {
    const googleMapsUrl =
        "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac";

    return ( <
        section id = "location"
        className = "location-section" >

        <
        div className = "location-container" >

        { /* LEFT CONTENT */ } <
        div className = "location-content" >

        <
        p className = "location-small-title" >
        THANEKAR DNSB <
        /p>

        <
        h2 > Location < /h2>

        <
        p className = "location-description" >
        Find Thanekar DNSB at its prime location with excellent connectivity and easy access to nearby facilities. <
        /p>

        { /* CALL */ } <
        div className = "location-contact" >
        <
        span > Call Us < /span>

        <
        a href = "tel:+918390662002" >
        8390662002 <
        /a> <
        /div>

        { /* WHATSAPP */ } <
        div className = "location-contact" >
        <
        span > WhatsApp < /span>

        <
        a href = "https://wa.me/918390662002"
        target = "_blank"
        rel = "noopener noreferrer" >
        8390662002 <
        /a> <
        /div>

        { /* EMAIL */ } <
        div className = "location-contact" >
        <
        span > Email < /span>

        <
        a href = "mailto:groupthanekar@gmail.com" >
        groupthanekar @gmail.com <
        /a> <
        /div>

        { /* GOOGLE MAPS BUTTON */ } <
        a href = { googleMapsUrl }
        target = "_blank"
        rel = "noopener noreferrer"
        className = "location-button" >
        Get Directions <
        /a>

        <
        /div>

        { /* GOOGLE MAP */ } <
        div className = "location-map" >

        <
        iframe src = "https://www.google.com/maps?q=Thanekar%20DNSB&output=embed"
        title = "Thanekar DNSB Location"
        loading = "lazy"
        allowFullScreen >
        < /iframe>

        <
        /div>

        <
        /div>

        <
        /section>
    );
}

export default Location;