import "./Pricing.css";

function Pricing({ onEnquire }) {
    const handleEnquire = (purpose, event) => {
        if (event) {
            event.preventDefault();
        }

        if (typeof onEnquire === "function") {
            onEnquire(purpose);
            return;
        }

        /*
         * Fallback:
         * If Pricing has not yet been given onEnquire from App.jsx,
         * use the existing footer enquiry button to open the common popup.
         */
        const existingEnquiryButton = document.querySelector(
            ".enquiry-button, .footer .enquire-btn"
        );

        if (existingEnquiryButton) {
            existingEnquiryButton.click();
        }
    };


    return (
        <section className="pricing-section" id="pricing">
            <div className="pricing-container">
                {/* =====================================================
                    RESIDENTIAL PRICING
                ===================================================== */}

                <div className="pricing-heading">
                    <p className="pricing-label">
                        RESIDENTIAL PRICING
                    </p>

                    <h2>
                        Your Dream Home,
                        <br />
                        <span>At The Right Value</span>
                    </h2>

                    <div className="pricing-line"></div>

                    <p className="pricing-intro">
                        Discover premium residential homes at Thanekar DNSB
                        and contact our team for current pricing and availability.
                    </p>
                </div>

                <div className="pricing-grid">
                    {/* 2 BHK */}
                    <article className="pricing-card">
                        <p className="pricing-type">RESIDENTIAL</p>

                        <h3>2 BHK</h3>

                        <div className="price">
                            <span className="starting-from-label">Starting from</span> ₹__ <span>LAKH*</span>
                        </div>

                        <div className="pricing-divider"></div>

                        <p className="pricing-description">
                            Spacious and thoughtfully designed 2 BHK homes
                            offering comfort, convenience and modern living.
                        </p>

                        <a
                            href="#contact"
                            className="pricing-button"
                            onClick={(event) =>
                                handleEnquire("residential-2bhk", event)
                            }
                        >
                            Enquire Now
                            <span className="button-arrow">→</span>
                        </a>
                    </article>

                    {/* 3 BHK */}
                    <article className="pricing-card pricing-featured">
                        <div
                            className="gold-sparkles"
                            aria-hidden="true"
                        >
                            <span className="sparkle sparkle-one">✦</span>
                            <span className="sparkle sparkle-two">✧</span>
                            <span className="sparkle sparkle-three">✦</span>
                        </div>


                        <p className="pricing-type pricing-type-gold">
                            RESIDENTIAL
                        </p>

                        <h3>3 BHK</h3>

                        <div className="price featured-price">
                            <span className="starting-from-label">Starting from</span> ₹__ <span>LAKH*</span>
                        </div>

                        <div className="pricing-divider"></div>

                        <p className="pricing-description">
                            Premium and spacious 3 BHK residences designed
                            for an elevated family lifestyle.
                        </p>

                        <a
                            href="#contact"
                            className="pricing-button featured-button"
                            onClick={(event) =>
                                handleEnquire("residential-3bhk", event)
                            }
                        >
                            Enquire Now
                            <span className="button-arrow">→</span>
                        </a>
                    </article>
                </div>


                {/* =====================================================
                    COMMERCIAL PRICING
                ===================================================== */}

                <div className="commercial-pricing-block">
                    <div className="commercial-pricing-heading">
                        <p className="pricing-label">
                            COMMERCIAL · G+2 SHOPS
                        </p>

                        <h2>
                            Commercial
                            <br />
                            <span>Pricing</span>
                        </h2>

                        <div className="pricing-line"></div>

                        <p className="pricing-intro">
                            Dedicated commercial shop spaces at Thanekar DNSB
                            Tower.
                        </p>
                    </div>

                    <div className="commercial-pricing-grid pricing-grid">
                        {/* 262 SQ.FT. */}
                        <article className="commercial-pricing-card pricing-card">
                            <div className="commercial-card-top">
                                <p className="pricing-type">
                                    COMMERCIAL SHOP
                                </p>

                                <span className="commercial-badge">
                                    COMMERCIAL
                                </span>
                            </div>

                            <h3 className="commercial-area">
                                262 SQ.FT.
                            </h3>

                            <p className="commercial-area-label">
                                SHOP AREA
                            </p>

                            <div className="price commercial-price">
                                <span className="starting-from-label">Starting from</span> ₹__ <span>LAKH*</span>
                            </div>

                            <div className="pricing-divider"></div>

                            <p className="pricing-description">
                                Commercial shop space in Thanekar DNSB Tower.
                            </p>

                            <a
                                href="#contact"
                                className="pricing-button commercial-enquire-button"
                                onClick={(event) =>
                                    handleEnquire(
                                        "commercial-262",
                                        event
                                    )
                                }
                            >
                                Enquire for Shop
                                <span className="button-arrow">
                                    →
                                </span>
                            </a>
                        </article>

                        {/* 1011 SQ.FT. */}
                        <article className="commercial-pricing-card pricing-card">
                            <div className="commercial-card-top">
                                <p className="pricing-type">
                                    COMMERCIAL SHOP
                                </p>

                                <span className="commercial-badge">
                                    COMMERCIAL
                                </span>
                            </div>

                            <h3 className="commercial-area">
                                1011 SQ.FT.
                            </h3>

                            <p className="commercial-area-label">
                                SHOP AREA
                            </p>

                            <div className="price commercial-price">
                                <span className="starting-from-label">Starting from</span> ₹__ <span>CR*</span>
                            </div>

                            <div className="pricing-divider"></div>

                            <p className="pricing-description">
                                Large-format commercial shop space at Thanekar
                                DNSB Tower.
                            </p>

                            <a
                                href="#contact"
                                className="pricing-button commercial-enquire-button"
                                onClick={(event) =>
                                    handleEnquire(
                                        "commercial-1011",
                                        event
                                    )
                                }
                            >
                                Enquire for Shop
                                <span className="button-arrow">
                                    →
                                </span>
                            </a>
                        </article>
                    </div>

                    <p className="commercial-pricing-note">
                        *Pricing and availability are subject to applicable
                        terms and confirmation.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
