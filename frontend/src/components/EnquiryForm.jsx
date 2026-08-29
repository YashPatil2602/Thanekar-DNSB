import { useEffect, useState } from "react";

import { submitContact } from "../api";

import "./EnquiryForm.css";

function EnquiryForm({
    isOpen,
    onClose,
    purpose = "general",
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    useEffect(() => {
        if (!isOpen) return undefined;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const downloadBrochure = () => {
        const brochureLink = document.createElement("a");

        brochureLink.href =
            "/brochure/thanekar-dnsb-brochure.pdf";

        brochureLink.download =
            "thanekar-dnsb-brochure.pdf";

        brochureLink.style.display = "none";

        document.body.appendChild(brochureLink);

        brochureLink.click();

        brochureLink.remove();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);
        setSubmitError("");

        try {
            const submissionData = {
                ...formData,
                message:
                    purpose === "brochure"
                        ? "Brochure download enquiry"
                        : formData.message,
            };

            await submitContact(submissionData);

            setSubmitted(true);

            if (purpose === "brochure") {
                downloadBrochure();
            }

            setTimeout(() => {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });

                setSubmitted(false);

                onClose();
            }, 2000);
        } catch (error) {
            setSubmitError(
                error.message ||
                    "Unable to submit your enquiry. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="enquiry-modal-overlay"
            onClick={onClose}
            role="presentation"
        >
            <div
                className="enquiry-modal-content"
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="enquiry-title"
            >
                <button
                    type="button"
                    className="enquiry-close-btn"
                    onClick={onClose}
                    aria-label="Close enquiry form"
                >
                    <span aria-hidden="true">×</span>
                </button>

                {submitted ? (
                    <div className="enquiry-success">
                        <div className="success-icon">
                            ✓
                        </div>

                        <h2>Thank You!</h2>

                        <p>
                            {purpose === "brochure"
                                ? "Your enquiry has been received. Your brochure download has started."
                                : "Your enquiry has been received. We will contact you soon."}
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="enquiry-modal-header">
                            <p className="form-top-text">
                                THE NEW PRIDE OF BADLAPUR
                            </p>

                            <h2 id="enquiry-title">
                                THANEKAR DNSB
                            </h2>

                            <p className="form-subtitle">
                                Luxury Residential & Commercial Development
                            </p>

                            <div className="form-heading">
                                <span></span>

                                <strong>
                                    {purpose === "brochure"
                                        ? "DOWNLOAD BROCHURE"
                                        : "GET LUXURY WALKTHROUGH"}
                                </strong>

                                <span></span>
                            </div>

                            <p className="form-tagline">
                                Tailored For You
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="enquiry-form"
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Name"
                                    aria-label="Name"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email (optional)"
                                    aria-label="Email"
                                />
                            </div>

                            <div className="phone-row">
                                <select
                                    defaultValue="India(+91)"
                                    aria-label="Country code"
                                >
                                    <option>India(+91)</option>
                                    <option>UAE(+971)</option>
                                    <option>USA(+1)</option>
                                    <option>UK(+44)</option>
                                </select>

                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Mobile Number"
                                    aria-label="Mobile Number"
                                />
                            </div>

                            <label className="consent">
                                <input
                                    type="checkbox"
                                    required
                                />

                                <span>
                                    I consent to the use of provided data in
                                    accordance with the privacy policy.
                                </span>
                            </label>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : purpose === "brochure"
                                      ? "Submit & Download Brochure"
                                      : "Get It Now"}
                            </button>

                            {submitError && (
                                <p
                                    className="form-error"
                                    role="alert"
                                >
                                    {submitError}
                                </p>
                            )}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default EnquiryForm;
