import { useEffect, useState } from "react";
import { submitContact } from "../api";
import "./Hero.css";


function Hero({ onEnquire }) {
    const [currentSlide, setCurrentSlide] =
        useState(0);

    const [submitted, setSubmitted] =
        useState(false);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [submitError, setSubmitError] =
        useState("");

    const heroImages = [
        "/images/hero/hero-1.png",
        "/images/hero/hero-2.png",
        "/images/hero/hero-3.png",
    ];


    useEffect(() => {
        const slider = setInterval(() => {
            setCurrentSlide(
                (previousSlide) =>
                    (previousSlide + 1) %
                    heroImages.length
            );
        }, 5000);

        return () => clearInterval(slider);
    }, [heroImages.length]);


    const handleHeroSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(
            formData.get("name") || ""
        ).trim();

        const email = String(
            formData.get("email") || ""
        ).trim();

        const countryCode = String(
            formData.get("countryCode")
            || "India(+91)"
        ).trim();

        const phone = String(
            formData.get("phone") || ""
        ).trim();

        const privacyConsent =
            formData.get("privacyConsent") === "on";

        const communicationConsent =
            formData.get(
                "communicationConsent"
            ) === "on";


        if (!privacyConsent) {
            setSubmitError(
                "Please accept the privacy consent."
            );
            return;
        }


        const phoneDigits =
            phone.replace(/\D/g, "");

        if (
            phoneDigits.length < 7 ||
            phoneDigits.length > 15
        ) {
            setSubmitError(
                "Please enter a valid mobile number."
            );
            return;
        }


        setIsSubmitting(true);
        setSubmitError("");


        try {
            await submitContact({
                name,
                email,
                country_code: countryCode,
                phone,
                privacy_consent:
                    privacyConsent,
                communication_consent:
                    communicationConsent,
                message:
                    "Luxury walkthrough enquiry",
                source: "hero-form",
            });

            form.reset();
            setSubmitted(true);

        } catch (error) {
            setSubmitError(
                error?.message ||
                "Unable to submit your enquiry. "
                + "Please try again."
            );

        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section
            className="hero-section"
            id="home"
        >
            <div className="hero-slider">
                {heroImages.map(
                    (image, index) => (
                        <img
                            key={image}
                            src={image}
                            alt={
                                `Thanekar DNSB ${
                                    index + 1
                                }`
                            }
                            className={
                                currentSlide === index
                                    ? "hero-slide active"
                                    : "hero-slide"
                            }
                        />
                    )
                )}

                <div
                    className="hero-image-overlay"
                ></div>

                <div className="hero-content">
                    <span
                        className="hero-small-title"
                    >
                        THANEKAR DNSB
                    </span>

                    <h1>
                        Premium Living
                        <br />
                        At Its Finest
                    </h1>

                    <p>
                        Experience modern luxury,
                        comfort and elegance in the
                        heart of Badlapur.
                    </p>

                    <button
                        type="button"
                        className="hero-button"
                        onClick={onEnquire}
                    >
                        Enquire Now
                    </button>
                </div>

                <div className="hero-dots">
                    {heroImages.map(
                        (image, index) => (
                            <button
                                key={image}
                                type="button"
                                className={
                                    currentSlide ===
                                    index
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setCurrentSlide(
                                        index
                                    )
                                }
                                aria-label={
                                    `Show hero slide ${
                                        index + 1
                                    }`
                                }
                            >
                                {index + 1}
                            </button>
                        )
                    )}
                </div>
            </div>


            <div className="hero-form">
                {submitted ? (
                    <div
                        className="
                            hero-success-message
                        "
                    >
                        <div
                            className="
                                hero-success-icon
                            "
                        >
                            ✓
                        </div>

                        <h2>
                            Thank You!
                        </h2>

                        <p>
                            Your enquiry has been
                            received. We will contact
                            you soon.
                        </p>

                        <button
                            type="button"
                            className="form-submit"
                            onClick={() => {
                                setSubmitted(false);
                                setSubmitError("");
                            }}
                        >
                            Submit Another Enquiry
                        </button>
                    </div>
                ) : (
                    <>
                        <p className="form-top-text">
                            THE NEW PRIDE OF BADLAPUR
                        </p>

                        <h2>
                            THANEKAR DNSB
                        </h2>

                        <p className="form-subtitle">
                            Luxury Residential &amp;
                            Commercial Development
                        </p>

                        <div className="form-heading">
                            <span></span>

                            <strong>
                                <span
                                    className="
                                        walkthrough-title
                                    "
                                >
                                    GET LUXURY
                                    WALKTHROUGH
                                </span>
                            </strong>

                            <span></span>
                        </div>

                        <p className="form-tagline">
                            Tailored For You
                        </p>

                        <form
                            onSubmit={
                                handleHeroSubmit
                            }
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                aria-label="Name"
                                autoComplete="name"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="
                                    Email (optional)
                                "
                                aria-label="Email"
                                autoComplete="email"
                            />

                            <div className="phone-row">
                                <select
                                    name="countryCode"
                                    defaultValue="India(+91)"
                                    aria-label="
                                        Country code
                                    "
                                >
                                    <option
                                        value="India(+91)"
                                    >
                                        India(+91)
                                    </option>

                                    <option
                                        value="UAE(+971)"
                                    >
                                        UAE(+971)
                                    </option>

                                    <option
                                        value="USA(+1)"
                                    >
                                        USA(+1)
                                    </option>

                                    <option
                                        value="UK(+44)"
                                    >
                                        UK(+44)
                                    </option>
                                </select>

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="
                                        Mobile Number
                                    "
                                    aria-label="
                                        Mobile Number
                                    "
                                    inputMode="numeric"
                                    required
                                />
                            </div>

                            <label className="consent">
                                <input
                                    type="checkbox"
                                    name="privacyConsent"
                                    required
                                />

                                <span>
                                    I consent to the
                                    use of provided
                                    data in accordance
                                    with the privacy
                                    policy.
                                </span>
                            </label>

                            <label
                                className="
                                    consent
                                    communication-consent
                                "
                            >
                                <input
                                    type="checkbox"
                                    name="communicationConsent"
                                    required
                                />

                                <span>
                                    I agree to receive
                                    project information
                                    and updates through
                                    phone, SMS,
                                    WhatsApp or email.
                                </span>
                            </label>

                            {submitError && (
                                <p
                                    className="
                                        hero-submit-error
                                    "
                                    role="alert"
                                >
                                    {submitError}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="
                                    form-submit
                                "
                                disabled={
                                    isSubmitting
                                }
                            >
                                {
                                    isSubmitting
                                        ? "Submitting..."
                                        : "Get It Now"
                                }
                            </button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}


export default Hero;
