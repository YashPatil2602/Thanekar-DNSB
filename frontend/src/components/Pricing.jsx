import "./Pricing.css";

function Pricing() {
    return (
        <section
            className="pricing-section"
            id="pricing"
        >
            <div className="pricing-container">

                <div className="pricing-heading">
                    <p className="pricing-label">
                        RESIDENTIAL PRICING & OFFERS
                    </p>

                    <h2>
                        Your Dream Home,
                        <br />
                        <span>At The Right Value</span>
                    </h2>

                    <div className="pricing-line"></div>

                    <p className="pricing-intro">
                        Discover premium residential homes at
                        Thanekar DNSB with attractive pricing
                        and a special limited-time offer.
                    </p>
                </div>

                <div className="pricing-grid">

                    <div className="pricing-card">
                        <p className="pricing-type">
                            RESIDENTIAL
                        </p>

                        <h3>2 BHK</h3>

                        <div className="price">
                            ₹70 <span>LAKH*</span>
                        </div>

                        <div className="pricing-divider"></div>

                        <p className="pricing-description">
                            Spacious and thoughtfully designed
                            2 BHK homes offering comfort,
                            convenience and modern living.
                        </p>

                        <a
                            href="#contact"
                            className="pricing-button"
                        >
                            Enquire Now
                            <span className="button-arrow">
                                →
                            </span>
                        </a>
                    </div>

                    <div className="pricing-card pricing-featured">

                        <div
                            className="gold-sparkles"
                            aria-hidden="true"
                        >
                            <span className="sparkle sparkle-one">
                                ✦
                            </span>

                            <span className="sparkle sparkle-two">
                                ✧
                            </span>

                            <span className="sparkle sparkle-three">
                                ✦
                            </span>
                        </div>

                        <div className="offer-badge">
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
                            Premium and spacious 3 BHK
                            residences designed for an elevated
                            family lifestyle.
                        </p>

                        <a
                            href="#contact"
                            className="pricing-button featured-button"
                        >
                            Enquire Now
                            <span className="button-arrow">
                                →
                            </span>
                        </a>
                    </div>
                </div>

                <div className="pricing-offer">
                    <div
                        className="offer-shine"
                        aria-hidden="true"
                    ></div>

                    <div className="offer-content">
                        <p>LIMITED TIME OFFER</p>

                        <h3>
                            Get up to{" "}
                            <span>
                                ₹8 Lakh Discount*
                            </span>
                        </h3>

                        <small>
                            *Terms & conditions apply.
                        </small>
                    </div>

                    <a
                        href="#contact"
                        className="offer-button"
                    >
                        Know More <span>→</span>
                    </a>
                </div>

                <div
                    className="commercial-pricing-block"
                    id="commercial-pricing"
                >
                    <div className="commercial-pricing-heading">
                        <p className="commercial-pricing-eyebrow">
                            COMMERCIAL • G+2 SHOPS
                        </p>

                        <h2>
                            Commercial
                            <br />
                            <span>Pricing</span>
                        </h2>

                        <div className="pricing-line"></div>

                        <p>
                            Dedicated commercial shop spaces
                            at Thanekar DNSB Tower.
                        </p>
                    </div>

                    <div className="pricing-grid commercial-pricing-grid">

                        <div className="pricing-card commercial-pricing-card">
                            <p className="pricing-type">
                                COMMERCIAL SHOP
                            </p>

                            <h3>262 SQ.FT.</h3>

                            <p className="commercial-area-caption">
                                SHOP AREA
                            </p>

                            <div className="price">
                                ₹60 <span>LAKH*</span>
                            </div>

                            <div className="pricing-divider"></div>

                            <p className="pricing-description">
                                Commercial shop space in
                                Thanekar DNSB Tower.
                            </p>

                            <a
                                href="#contact"
                                className="pricing-button"
                            >
                                Enquire for Shop →
                            </a>
                        </div>

                        <div className="pricing-card commercial-pricing-card">
                            <p className="pricing-type">
                                COMMERCIAL SHOP
                            </p>

                            <h3>1011 SQ.FT.</h3>

                            <p className="commercial-area-caption">
                                SHOP AREA
                            </p>

                            <div className="price">
                                ₹4 <span>CR*</span>
                            </div>

                            <div className="pricing-divider"></div>

                            <p className="pricing-description">
                                Large-format commercial shop
                                space at Thanekar DNSB Tower.
                            </p>

                            <a
                                href="#contact"
                                className="pricing-button"
                            >
                                Enquire for Shop →
                            </a>
                        </div>

                    </div>

                    <p className="commercial-price-note">
                        *Pricing and availability are subject
                        to applicable terms and confirmation.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Pricing;
