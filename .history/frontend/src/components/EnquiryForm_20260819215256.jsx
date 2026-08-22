import { useState } from "react";
import "./EnquiryForm.css";

function EnquiryForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you can add API call to send form data to backend
    console.log("Form submitted:", formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="enquiry-modal-overlay" onClick={onClose}>
      <div className="enquiry-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="enquiry-close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="enquiry-modal-header">
          <h2>Enquire Now</h2>
          <p>Get in touch with us for more information</p>
        </div>

        {submitted ? (
          <div className="enquiry-success">
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>Your enquiry has been submitted successfully.</p>
            <p>We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="enquiry-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your enquiry here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default EnquiryForm;
