import "./FloorPlans.css";

const commercialPdf =
    "/images/commercial/Thanekar-DNSB-Commercial-G2.pdf";

const commercialFloorPlans = [
    {
        title: "1st Floor Commercial Plan",
        pdf: commercialPdf,
        page: 1,
        preview:
            "/images/floor-plan-previews/commercial-1.jpg",
    },
    {
        title: "2nd Floor Commercial Plan",
        pdf: commercialPdf,
        page: 2,
        preview:
            "/images/floor-plan-previews/commercial-2.jpg",
    },
];

const residentialFloorPlans = [
    {
        title: "3rd Floor",
        pdf: "/images/FloorPlans.jsx/02_3rd-floor-plan.pdf",
        preview:
            "/images/floor-plan-previews/residential-3.jpg",
    },
    {
        title: "4th Floor",
        pdf: "/images/FloorPlans.jsx/03_4th-floor-plan.pdf",
        preview:
            "/images/floor-plan-previews/residential-4.jpg",
    },
    {
        title: "5th Floor",
        pdf: "/images/FloorPlans.jsx/04_5th-floor-plan.pdf",
        preview:
            "/images/floor-plan-previews/residential-5.jpg",
    },
    {
        title: "6th Floor",
        pdf: "/images/FloorPlans.jsx/05_6th-floor-plan.pdf",
        preview:
            "/images/floor-plan-previews/residential-6.jpg",
    },
    {
        title: "7th Floor",
        pdf: "/images/FloorPlans.jsx/06_7th-floor-plan.pdf",
        preview:
            "/images/floor-plan-previews/residential-7.jpg",
    },
];

function FloorPlanCard({
    plan,
    commercial = false,
}) {
    const viewUrl = plan.page
        ? `${plan.pdf}#page=${plan.page}`
        : plan.pdf;

    return (
        <article
            className={
                commercial
                    ? "floor-plan-card commercial-floor-plan-card"
                    : "floor-plan-card"
            }
        >
            <div className="floor-plan-image-container">
                <img
                    src={plan.preview}
                    alt={`${plan.title} - Thanekar DNSB`}
                    className="floor-plan-preview"
                    decoding="async"
                />
            </div>

            <div className="floor-plan-details">
                <p className="floor-plan-project">
                    {commercial
                        ? "THANEKAR DNSB • COMMERCIAL"
                        : "THANEKAR DNSB • RESIDENTIAL"}
                </p>

                <h4 className="floor-plan-title">
                    {plan.title}
                </h4>

                <div className="gold-divider">
                    <span></span>
                </div>

                <a
                    className="view-plan-btn"
                    href={viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${plan.title}`}
                >
                    View Plan →
                </a>
            </div>
        </article>
    );
}

function FloorPlans() {
    return (
        <section
            className="floor-plans-section"
            id="floor-plans"
        >
            <div className="floor-plans-container">

                <div className="floor-plans-heading-block">
                    <h2 className="floor-plans-title">
                        Floor Plans
                    </h2>

                    <p className="floor-plans-subtitle">
                        Explore commercial and residential
                        floor plans of Thanekar DNSB.
                    </p>
                </div>

                <div
                    className="floor-plan-group commercial-floor-plan-group"
                    id="commercial-floor-plans"
                >
                    <p className="floor-plan-group-eyebrow">
                        COMMERCIAL • G+2 SHOPS
                    </p>

                    <h3 className="floor-plan-group-title">
                        Commercial Floor Plans
                    </h3>

                    <p className="floor-plan-group-description">
                        Dedicated shop layouts presented
                        separately from the residential tower
                        plans.
                    </p>

                    <div className="floor-plans-grid">
                        {commercialFloorPlans.map((plan) => (
                            <FloorPlanCard
                                key={`${plan.pdf}-${plan.page}`}
                                plan={plan}
                                commercial
                            />
                        ))}
                    </div>
                </div>

                <div className="floor-plan-section-divider"></div>

                <div
                    className="floor-plan-group"
                    id="residential-floor-plans"
                >
                    <p className="floor-plan-group-eyebrow">
                        RESIDENTIAL
                    </p>

                    <h3 className="floor-plan-group-title">
                        Residential Floor Plans
                    </h3>

                    <p className="floor-plan-group-description">
                        Residential layouts from the 3rd
                        through 7th floors.
                    </p>

                    <div className="floor-plans-grid">
                        {residentialFloorPlans.map((plan) => (
                            <FloorPlanCard
                                key={plan.pdf}
                                plan={plan}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default FloorPlans;
