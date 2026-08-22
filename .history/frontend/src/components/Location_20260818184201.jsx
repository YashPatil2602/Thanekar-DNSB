import "./Location.css";

function Location() {
    const googleMapsUrl =
        "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac";

    return ( <
        section id = "location"
        className = "location-section" >
        <
        div className = "location-container" >

        { /* LEFT SIDE */ } <
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

        { /* GET DIRECTIONS */ } <
        a href = { googleMapsUrl }
        target = "_blank"
        rel = "noopener noreferrer"
        className = "location-button" >
        Get Directions <
        /a>

        <
        /div>

        { /* RIGHT SIDE - GOOGLE MAP */ } <
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