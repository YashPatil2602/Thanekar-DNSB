from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

FEATURES = [
    {
        "id": 1,
        "title": "Premium Location",
        "description": "Connected living in the heart of Badlapur with everyday essentials close by.",
    },
    {
        "id": 2,
        "title": "Thoughtful Design",
        "description": "Well-planned homes designed around comfort, natural light, and daily ease.",
    },
    {
        "id": 3,
        "title": "Lifestyle Amenities",
        "description": "Spaces for wellness, celebration, relaxation, and time together.",
    },
]


@app.route("/")
def home():
    return jsonify({
        "message": "Thanekar DNSB Backend is running successfully"
    })


@app.route("/api/health")
def health():
    return jsonify({
        "status": "success",
        "message": "Backend API is working"
    })


@app.route("/api/features", methods=["GET"])
def features():
    return jsonify({"features": FEATURES})


@app.route("/api/contact", methods=["POST"])
def contact():
    payload = request.get_json(silent=True) or {}
    name = str(payload.get("name", "")).strip()
    phone = str(payload.get("phone", "")).strip()

    if not name or not phone:
        return jsonify({
            "status": "error",
            "message": "Name and phone are required.",
        }), 400

    return jsonify({
        "status": "success",
        "message": "Thank you. We will contact you soon.",
    }), 201


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )