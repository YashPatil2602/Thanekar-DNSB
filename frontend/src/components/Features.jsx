import { useEffect, useState } from "react";
import { fetchFeatures } from "../api";
import "./Features.css";

function Features() {
    const [features, setFeatures] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchFeatures()
            .then((result) => setFeatures(result.features || []))
            .catch(() => setError("Features are temporarily unavailable."));
    }, []);

    return (
        <section className="features-section" id="features">
            <div className="features-container">
                <div className="features-heading">
                    <span>WHY CHOOSE DNSB</span>
                    <h2>Designed for <em>better living.</em></h2>
                </div>
                {error ? <p className="features-message">{error}</p> : null}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <article className="feature-card" key={feature.id}>
                            <span className="feature-index">0{index + 1}</span>
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
