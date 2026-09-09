import "./Footer.css";

function Footer({ onEnquire, onBrochure }) {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <div className="footer-logo-container">
                        <img
                            src="/images/logo/logo.png"
                            alt="Thanekar DNSB"
                            className="footer-logo"
                        />
                    </div>

                    <h2>THANEKAR</h2>

                    <div className="dnsb-logo">
                        <span></span>
                        <strong>DNSB</strong>
                        <span></span>
                    </div>

                    <p>
                        Premium residential and commercial
                        <br />
                        development in Badlapur.
                    </p>

                    <div className="footer-building-image">
  <img
    src="/images/hero/hero-2.png"
    alt="Thanekar DNSB project building"
  />
</div>
                </div>

                <div className="footer-section">
                    <h3>QUICK LINKS</h3>

                    <div className="footer-line"></div>

                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#configuration">Configuration</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#amenities">Amenities</a></li>
                        <li><a href="#floor-plans">Floor Plans</a></li>
                        <li><a href="#location">Location</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>CONTACT</h3>

                    <div className="footer-line"></div>

                    <div className="contact-box">

                        <div className="contact-row">
                            <div className="contact-icon">☎</div>

                            <div>
                                <strong>Call Now</strong>

                                <a href="tel:+918390662002">
                                    +91 83906 62002
                                </a>
                            </div>
                        </div>

                        <div className="contact-row">
                            <div className="contact-icon">◉</div>

                            <div>
                                <strong>WhatsApp</strong>

                                <a
                                    href="https://wa.me/918390662002"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +91 83906 62002
                                </a>
                            </div>
                        </div>

                        <div className="contact-row">
                            <div className="contact-icon">✉</div>

                            <div>
                                <strong>Email Us</strong>

                                <a href="mailto:groupthanekar@gmail.com">
                                    groupthanekar@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="contact-row">
                            <div className="contact-icon">●</div>

                            <div>
                                <strong>Site Address</strong>

                                <p>Thanekar DNSB, At Gandhi Chowk,<br />Badlapur(E).</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="footer-section">
                    <h3>FOLLOW US</h3>

                    <div className="footer-line"></div>

                    <div className="social-icons">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            Instagram
                        </a>

                        <a
                            href="https://wa.me/918390662002"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                        >
                            WhatsApp
                        </a>
                    </div>

                    <div className="brochure-box">

                        <h3>ENQUIRE NOW</h3>

                        <div className="footer-line"></div>

                        <button
                            type="button"
                            className="enquiry-button"
                            onClick={onEnquire}
                        >
                            <span>→</span>
                            Enquire Now
                        </button>

                        <div className="brochure-divider"></div>

                        <h3>DOWNLOAD BROCHURE</h3>

                        <div className="footer-line"></div>

                        <button
                            type="button"
                            className="brochure-button"
                            onClick={onBrochure}
                        >
                            <span>▣</span>
                            Download Brochure
                        </button>

                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <div className="bottom-line">
                    <span></span>
                    <div className="bottom-building">♜</div>
                    <span></span>
                </div>

                <div className="bottom-content">
                    <p>
                        ©2026 Thanekar DNSB. All Rights Reserved.
                    </p>

                    <div className="bottom-links">
                        <a href="#">Privacy Policy</a>
                        <b>|</b>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
