import { useEffect, useState } from "react";
import { submitContact } from "../api";
import "./EnquiryForm.css";

const EMPTY_FORM = {
    name: "",
    email: "",
    phone: "",
    message: "",
};

function getPurposeDetails(purpose) {
    switch (purpose) {
        case "brochure":
            return {
                heading: "DOWNLOAD BROCHURE",
                actionText: "Submit & Download Brochure",
                message: "Brochure download enquiry",
            };

        case "special-offer":
            return {
                heading: "SPECIAL OFFER",
                actionText: "Get Offer Details",
                message: "Special offer enquiry",
            };

        case "residential-2bhk":
            return {
                heading: "2 BHK ENQUIRY",
                actionText: "Get Details",
                message: "Residential 2 BHK enquiry",
            };

        case "residential-3bhk":
            return {
                heading: "3 BHK ENQUIRY",
                actionText: "Get Details",
                message: "Residential 3 BHK enquiry",
            };

        case "commercial-262":
            return {
                heading: "COMMERCIAL SHOP ENQUIRY",
                actionText: "Get Shop Details",
                message: "Commercial shop enquiry - 262 sq.ft.",
            };

        case "commercial-1011":
            return {
                heading: "COMMERCIAL SHOP ENQUIRY",
                actionText: "Get Shop Details",
                message: "Commercial shop enquiry - 1011 sq.ft.",
            };

        default:
            return {
                heading: "THANEKAR DNSB",
                actionText: "Get It Now",
                message: "General project enquiry",
            };
    }
}

function EnquiryForm({
    isOpen,
    onClose,
    purpose = "general",
}) {
    const [formData, setFormData] = useState(EMPTY_FORM);

    const [countryCode, setCountryCode] =
        useState("India(+91)");

    const [privacyConsent, setPrivacyConsent] =
        useState(false);

    const [
        communicationConsent,
        setCommunicationConsent,
    ] = useState(false);

    const [submitted, setSubmitted] =
        useState(false);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [submitError, setSubmitError] =
        useState("");

    const purposeDetails =
        getPurposeDetails(purpose);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        setSubmitted(false);
        setSubmitError("");

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );

            document.body.style.overflow =
                previousOverflow;
        };
    }, [isOpen, onClose]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "phone") {
            const numbersOnly =
                value.replace(/\D/g, "");

            setFormData((previous) => ({
                ...previous,
                phone: numbersOnly.slice(0, 10),
            }));

            return;
        }

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData(EMPTY_FORM);
        setCountryCode("India(+91)");
        setPrivacyConsent(false);
        setCommunicationConsent(false);
        setSubmitError("");
        setIsSubmitting(false);
    };

    const downloadBrochure = () => {
        const link =
            document.createElement("a");

        link.href =
            "/brochure/thanekar-dnsb-brochure.pdf";

        link.download =
            "Thanekar-DNSB-Brochure.pdf";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!privacyConsent) {
            setSubmitError(
                "Please accept the privacy consent before submitting."
            );

            return;
        }

        if (formData.phone.length !== 10) {
            setSubmitError(
                "Please enter a valid 10-digit mobile number."
            );

            return;
        }

        setIsSubmitting(true);
        setSubmitError("");

        const submissionData = {
            ...formData,
            message: purposeDetails.message,
        };

        try {
            await submitContact(
                submissionData
            );

            if (purpose === "brochure") {
                downloadBrochure();
            }

            setSubmitted(true);

            window.setTimeout(() => {
                resetForm();
                setSubmitted(false);
                onClose();
            }, 2200);
        } catch (error) {
            setSubmitError(
                error?.message ||
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
                onClick={(event) =>
                    event.stopPropagation()
                }
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
                    ×
                </button>

                {submitted ? (
                    <div className="enquiry-success success-message">
                        <div
                            className="success-icon"
                            aria-hidden="true"
                        >
                            ✓
                        </div>

                        <h2 className="success-title">
                            Thank You!
                        </h2>

                        <p className="success-text">
                            {purpose === "brochure"
                                ? "Your brochure download has started. We will also contact you shortly."
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
                                {purposeDetails.heading}
                            </h2>

                            <p className="form-subtitle">
                                Luxury Residential &amp;
                                Commercial Development
                            </p>

                            <div className="form-heading">
                                <span></span>

                                <strong><span className="walkthrough-title">GET LUXURY WALKTHROUGH</span></strong>

                                <span></span>
                            </div>

                            <p className="form-tagline">
                                Tailored For You
                            </p>
                        </div>

                        <form
                            className="enquiry-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    aria-label="Name"
                                    autoComplete="name"
                                    required
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
                                    autoComplete="email"
                                />
                            </div>

                            <div className="phone-row">
                                <select
                                    value={countryCode}
                                    onChange={(event) =>
                                        setCountryCode(
                                            event.target.value
                                        )
                                    }
                                    aria-label="Country code"
                                >
                                    <option value="India(+91)">
                                        India(+91)
                                    </option>

                                    <option value="UAE(+971)">
                                        UAE(+971)
                                    </option>

                                    <option value="USA(+1)">
                                        USA(+1)
                                    </option>

                                    <option value="UK(+44)">
                                        UK(+44)
                                    </option>
                                </select>

                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    aria-label="Mobile Number"
                                    autoComplete="tel"
                                    inputMode="numeric"
                                    maxLength={10}
                                    required
                                />
                            </div>

                            {/* REQUIRED PRIVACY CONSENT */}
                            <label className="consent enquiry-consent">
                                <input
                                    type="checkbox"
                                    checked={privacyConsent}
                                    onChange={(event) =>
                                        setPrivacyConsent(
                                            event.target.checked
                                        )
                                    }
                                    required
                                />

                                <span>
                                    I consent to the use of
                                    provided data in accordance
                                    with the privacy policy.
                                </span>
                            </label>

                            {/* ADDITIONAL COMMUNICATION CONSENT */}
                            <label className="consent enquiry-consent communication-consent">
                                <input
                                    type="checkbox"
                                    checked={
                                        communicationConsent
                                    }
                                    onChange={(event) =>
                                        setCommunicationConsent(
                                            event.target.checked
                                        )
                                    }
                                />

                                <span>
                                    I agree to receive project
                                    information and updates through
                                    phone, SMS, WhatsApp or email.
                                </span>
                            </label>

                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : purposeDetails.actionText}
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
