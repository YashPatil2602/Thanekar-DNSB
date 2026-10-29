import "./LocationNearby.css";

const nearbyPlaces = [
  {
    icon: "🚉",
    category: "Railway Connectivity",
    places: [
      {
        name: "Badlapur Railway Station",
        distance: "Very close to DNSB"
      }
    ]
  },
  {
    icon: "🎓",
    category: "Nearby Schools",
    places: [
      {
        name: "Fatima High School",
        distance: "Approx. 0.4 km"
      },
      {
        name: "Thanekar International School",
        distance: "Approx. 2–3 km"
      }
    ]
  },
  {
    icon: "🏥",
    category: "Hospitals",
    places: [
      {
        name: "Airavat Multispeciality Hospital",
        distance: "At the doorstep"
      }
    ]
  },
  {
    icon: "🛍️",
    category: "Shopping & Essentials",
    places: [
      {
        name: "Trends",
        distance: "Approx. 3 min walk"
      },
      {
        name: "MAX",
        distance: "Approx. 3 min walk"
      }
    ]
  }
];

export default function LocationNearby({ showMap = false }) {
  const mapUrl =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Thanekar DNSB Tower, Gandhi Chowk, Badlapur East, Maharashtra"
    ) +
    "&output=embed";

  return (
    <section
      className="dnsb-nearby-section"
      aria-labelledby="dnsb-nearby-title"
    >
      <div className="dnsb-nearby-container">

        <div className="dnsb-nearby-heading">
          <span className="dnsb-nearby-eyebrow">
            LOCATION ADVANTAGES
          </span>

          <h2 id="dnsb-nearby-title">
            Everything You Need,{" "}
            <span>Close to Home</span>
          </h2>

          <p>
            Schools, healthcare, transport and shopping are
            conveniently accessible from Thanekar DNSB.
          </p>
        </div>

        <div className="dnsb-nearby-grid">
          {nearbyPlaces.map((group) => (
            <article
              className="dnsb-nearby-card"
              key={group.category}
            >
              <div className="dnsb-nearby-icon" aria-hidden="true">
                {group.icon}
              </div>

              <h3>{group.category}</h3>

              <div className="dnsb-nearby-places">
                {group.places.map((place) => (
                  <div
                    className="dnsb-nearby-place"
                    key={place.name}
                  >
                    <p>{place.name}</p>
                    <strong>{place.distance}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="dnsb-nearby-note">
          *Distances and travel times are approximate, based on
          information provided by the project team. Actual travel times
          may vary with traffic and route.
        </p>

        {showMap && (
          <div className="dnsb-nearby-map">
            <h3>Find Us on Google Maps</h3>

            <iframe
              title="Thanekar DNSB Tower Location Map"
              src={mapUrl}
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        )}

      </div>
    </section>
  );
}
