import "./Location.css";

function Location() {
    const mapUrl =
        "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac";

    return ( <
        section id = "location"
        className = "location-section" >
        <
        div className = "location-container" >

        { /* LEFT */ } <
        div className = "location-content" >

        <
        p className = "location-small-title" >
        THANEKAR DNSB <
        /p>

        <
        h2 > Location < /h2>

        <
        p className = "location-description" >
        Find us at our prime location with excellent connectivity and easy access. <
        /p>

        <
        a href = { mapUrl }
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
        /div> <
        /section>
    );
}

export default Location;