from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


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


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )