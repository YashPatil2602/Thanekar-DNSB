import "./Location.css";

function Location() {
    const googleMapsUrl =
        "https://maps.app.goo.gl/RmpqrCthRuWyVC5y6";

    const googleMapsEmbedUrl =
        "https://www.google.com/maps?q=19.1639878,73.2395066&z=17&output=embed";

    return (
        <section
            id="location"
            className="location-section"
        >
            <div className="location-container">

                <div className="location-content">
                    <p className="location-small-title">
                        THANEKAR DNSB
                    </p>

                    <h2>Location</h2>

                    <p className="location-description">
                        Thanekar DNSB – Residential & Commercial Spaces,
                        Patil Pada, Station Pada, Badlapur,
                        Maharashtra - 421503.
                    </p>

                    <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="location-button"
                    >
                        Get Directions
                    </a>
                </div>

                <div className="location-map">
                    <iframe
                        src={googleMapsEmbedUrl}
                        title="Thanekar DNSB Location"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
        </section>
    );
}

export default Location;
