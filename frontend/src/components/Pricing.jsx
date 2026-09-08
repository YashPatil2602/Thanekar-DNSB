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

    const handleOfferKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleEnquire("special-offer");
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
                        RESIDENTIAL PRICING &amp; OFFERS
                    </p>

                    <h2>
                        Your Dream Home,
                        <br />
                        <span>At The Right Value</span>
                    </h2>

                    <div className="pricing-line"></div>

                    <p className="pricing-intro">
                        Discover premium residential homes at Thanekar DNSB
                        with attractive pricing and a special limited-time
                        offer.
                    </p>
                </div>

                <div className="pricing-grid">
                    {/* 2 BHK */}
                    <article className="pricing-card">
                        <p className="pricing-type">RESIDENTIAL</p>

                        <h3>2 BHK</h3>

                        <div className="price">
                            ₹70 <span>LAKH*</span>
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

                        <div
                            className="offer-badge"
                            role="button"
                            tabIndex={0}
                            aria-label="Enquire about the special offer"
                            onClick={() =>
                                handleEnquire("special-offer")
                            }
                            onKeyDown={handleOfferKeyDown}
                        >
                            <span>SPECIAL OFFER</span>
                        </div>

                        <p className="pricing-type pricing-type-gold">
                            RESIDENTIAL
                        </p>

                        <h3>3 BHK</h3>

                        <div className="price featured-price">
                            ₹86 <span>LAKH*</span>
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

                {/* LIMITED TIME OFFER */}
                <div className="pricing-offer">
                    <div
                        className="offer-shine"
                        aria-hidden="true"
                    ></div>

                    <div className="offer-content">
                        <p>LIMITED TIME OFFER</p>

                        <h3>
                            Get up to{" "}
                            <span>₹8 Lakh Discount*</span>
                        </h3>

                        <small>
                            *Terms &amp; conditions apply.
                        </small>
                    </div>

                    <a
                        href="#contact"
                        className="offer-button"
                        onClick={(event) =>
                            handleEnquire("special-offer", event)
                        }
                    >
                        Know More <span>→</span>
                    </a>
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
                                ₹60 <span>LAKH*</span>
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
                                ₹4 <span>CR*</span>
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
