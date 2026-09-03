import "./FloorPlans.css";

const floorPlans = [
    {
        title: "1st & 2nd Floor",
        pdf: "/images/FloorPlans.jsx/01_1st-2nd-floor-plan.pdf",
    },
    {
        title: "3rd Floor",
        pdf: "/images/FloorPlans.jsx/02_3rd-floor-plan.pdf",
    },
    {
        title: "4th Floor",
        pdf: "/images/FloorPlans.jsx/03_4th-floor-plan.pdf",
    },
    {
        title: "5th Floor",
        pdf: "/images/FloorPlans.jsx/04_5th-floor-plan.pdf",
    },
    {
        title: "6th Floor",
        pdf: "/images/FloorPlans.jsx/05_6th-floor-plan.pdf",
    },
    {
        title: "7th Floor",
        pdf: "/images/FloorPlans.jsx/06_7th-floor-plan.pdf",
    },
];

function FloorPlans() {
    return (
        <section
            className="floor-plans-section"
            id="floor-plans"
        >
            <div className="floor-plans-container">

                <h2 className="floor-plans-title">
                    Floor Plans
                </h2>

                <p className="floor-plans-subtitle">
                    Explore the thoughtfully designed floor
                    plans of Thanekar DNSB.
                </p>

                <div className="floor-plans-grid">
                    {floorPlans.map((plan) => (
                        <div
                            className="floor-plan-card"
                            key={plan.pdf}
                        >
                            <div className="floor-plan-image-container">
                                <iframe
                                    src={`${plan.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
                                    title={`${plan.title} floor plan`}
                                    className="floor-plan-pdf"
                                    loading="lazy"
                                ></iframe>
                            </div>

                            <div className="floor-plan-details">
                                <p className="floor-plan-project">
                                    THANEKAR DNSB
                                </p>

                                <h3 className="floor-plan-title">
                                    {plan.title}
                                </h3>

                                <div className="gold-divider">
                                    <span></span>
                                </div>

                                <a
                                    className="view-plan-btn"
                                    href={plan.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Plan →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default FloorPlans;
