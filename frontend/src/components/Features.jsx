import { useEffect, useState } from "react";
import { fetchFeatures } from "../api";
import "./Features.css";

// Default cards shown if the backend API is unavailable
const DEFAULT_FEATURES = [
    {
        id: "premium-location",
        title: "Premium Location",
        description:
            "Connected living in the heart of Badlapur with everyday essentials close by.",
    },
    {
        id: "thoughtful-design",
        title: "Thoughtful Design",
        description:
            "Well-planned homes designed around comfort, natural light, and daily ease.",
    },
    {
        id: "lifestyle-amenities",
        title: "Lifestyle Amenities",
        description:
            "Spaces for wellness, celebration, relaxation, and time together.",
    },
];

function Features() {
    const [features, setFeatures] = useState(DEFAULT_FEATURES);

    useEffect(() => {
        let active = true;

        fetchFeatures()
            .then((result) => {
                if (!active) return;

                const apiFeatures = Array.isArray(result?.features)
                    ? result.features.filter(
                          (feature) =>
                              feature &&
                              typeof feature.title === "string" &&
                              feature.title.trim()
                      )
                    : [];

                // Use backend features when available.
                // Otherwise, keep the default cards.
                if (apiFeatures.length > 0) {
                    setFeatures(apiFeatures);
                }
            })
            .catch(() => {
                // API failed: default cards remain visible.
            });

        return () => {
            active = false;
        };
    }, []);

    return (
        <section className="features-section" id="features">
            <div className="features-container">
                <div className="features-heading">
                    <span>WHY CHOOSE DNSB</span>
                    <h2>
                        Designed for <em>better living.</em>
                    </h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <article
                            className="feature-card"
                            key={feature.id ?? index}
                        >
                            <span className="feature-index">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
