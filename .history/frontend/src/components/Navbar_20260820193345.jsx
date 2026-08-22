import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeContact, setActiveContact] = useState(null);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* LOGO */}
        <a href="#home" className="logo">
          <div className="logo-main">THANEKAR</div>
          <div className="logo-sub">DNSB</div>
        </a>

        {/* NAVIGATION */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#configuration">Configuration</a>
          <a href="#pricing">Pricing</a>
          <a href="#amenities">Amenities</a>
          <a href="#floor-plans">Floor Plans</a>
          <a href="#location">Location</a>
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="navbar-buttons">
          {/* WHATSAPP CONTACT */}
          <div className="whatsapp-contact-container">
            <button
              className="whatsapp-btn"
              onClick={() => setActiveContact(activeContact === "whatsapp" ? null : "whatsapp")}
              title="WhatsApp"
              aria-label="Show WhatsApp number"
            >
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
                <circle cx="12" cy="11.5" r="8.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8.7 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.5.6c.5 1 1.3 1.8 2.4 2.3l.6-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.4.2-2.9-.7-5.1-2.9-5.8-5.8-.1-.4 0-1 .2-1.4Z" fill="currentColor" />
                <path d="m5.2 19.3 1-3.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            {activeContact === "whatsapp" && (
              <div className="whatsapp-contact-tooltip">
                <p>Contact:</p>
                <a href="https://wa.me/918390662002" target="_blank" rel="noopener noreferrer">
                  +91 8390662002
                </a>
              </div>
            )}
          </div>

          {/* BROCHURE */}
          <a
            href="/brochure/thanekar-dnsb-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="brochure-btn"
          >
            Brochure
          </a>

          {/* CALL NOW */}
          <div className="call-contact-container">
            <button
              type="button"
              className="call-btn"
              onClick={() => setActiveContact(activeContact === "call" ? null : "call")}
              aria-label="Show phone number"
            >
              Call Now
            </button>
            {activeContact === "call" && (
              <div className="call-contact-tooltip">
                <p>Call us:</p>
                <a href="tel:+918390662002">8390662002</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
