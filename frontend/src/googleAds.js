export function trackLeadConversion() {
    if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
            send_to: "AW-18029297331/t45QCP-_wa8dELP9hJVD",
            value: 1.0,
            currency: "INR",
        });
    }
}
