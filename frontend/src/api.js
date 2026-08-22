const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

export async function fetchFeatures() {
    const response = await fetch(`${API_BASE_URL}/features`);
    if (!response.ok) throw new Error("Unable to load features");
    return response.json();
}

export async function submitContact(formData) {
    const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "Unable to submit enquiry");
    return result;
}
