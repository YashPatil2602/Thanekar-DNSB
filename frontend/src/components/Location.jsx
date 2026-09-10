import "./Location.css";

function Location() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Thanekar%20DNSB%2C%20At%20Gandhi%20Chowk%2C%20Badlapur%20East";

  const googleMapsEmbedUrl =
    "https://www.google.com/maps?q=Thanekar%20DNSB%2C%20At%20Gandhi%20Chowk%2C%20Badlapur%20East&output=embed";

  return (
    <section id="location" className="location-section">
      <div className="location-container">

        <div className="location-content">
          <p className="location-small-title">
            THANEKAR DNSB
          </p>

          <h2>Location</h2>

          <p className="location-description">
            Thanekar DNSB, At Gandhi Chowk, Badlapur(E).
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
            src="https://www.google.com/maps?q=19.1638638,73.2395138&z=18&output=embed"
            title="Thanekar DNSB, At Gandhi Chowk, Badlapur East"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Location;
