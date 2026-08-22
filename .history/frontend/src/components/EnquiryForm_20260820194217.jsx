import { useEffect, useState } from "react";
import "./EnquiryForm.css";

function EnquiryForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="enquiry-modal-overlay" onClick={onClose} role="presentation">
      <div className="enquiry-modal-content" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
        <button className="enquiry-close-btn" onClick={onClose} aria-label="Close enquiry form">&times;</button>

        {submitted ? (
          <div className="enquiry-success">
            <div className="success-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your enquiry has been received. We will contact you soon.</p>
          </div>
        ) : (
          <>
            <div className="enquiry-modal-header">
              <img src="/images/logo/logo.png" alt="Thanekar DNSB" className="enquiry-logo" />
              <div>
                <p className="enquiry-eyebrow">THE NEW PRIDE OF BADLAPUR</p>
                <h2 id="enquiry-title">Book Your Private Walkthrough</h2>
                <p className="enquiry-subtitle">Discover a richer way of living at Thanekar DNSB.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="enquiry-form">
              <p className="enquiry-form-intro">Share your details and our property advisor will contact you shortly.</p>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Your phone number" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us what you would like to know" rows="3"></textarea>
              </div>

              <button type="submit" className="submit-btn">Request My Walkthrough <span>&rarr;</span></button>
              <p className="enquiry-note">Your details are private and used only for this enquiry.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default EnquiryForm;
