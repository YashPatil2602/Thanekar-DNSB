import os
from datetime import datetime, timezone
from pathlib import Path

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from sqlalchemy.engine import URL


BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DATA_DIR.mkdir(exist_ok=True)

load_dotenv(BASE_DIR / ".env")


def build_database_uri():
    db_host = os.getenv("DB_HOST", "").strip()

    if db_host:
        db_user = os.getenv("DB_USER", "").strip()
        db_password = os.getenv("DB_PASSWORD", "")
        db_name = os.getenv("DB_NAME", "").strip()
        db_port = int(os.getenv("DB_PORT", "3306"))

        if not db_user or not db_password or not db_name:
            raise RuntimeError(
                "DB_HOST is configured but DB_USER, "
                "DB_PASSWORD or DB_NAME is missing."
            )

        return URL.create(
            drivername="mysql+pymysql",
            username=db_user,
            password=db_password,
            host=db_host,
            port=db_port,
            database=db_name,
            query={"charset": "utf8mb4"},
        )

    return f"sqlite:///{DATA_DIR / 'enquiries.db'}"


app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = build_database_uri()
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {
    "pool_pre_ping": True,
}

db = SQLAlchemy(app)


class Enquiry(db.Model):
    __tablename__ = "enquiries"

    id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True,
    )

    name = db.Column(
        db.String(120),
        nullable=False,
    )

    email = db.Column(
        db.String(255),
        nullable=True,
    )

    country_code = db.Column(
        db.String(30),
        nullable=False,
        default="India(+91)",
    )

    phone = db.Column(
        db.String(30),
        nullable=False,
    )

    privacy_consent = db.Column(
        db.Boolean,
        nullable=False,
        default=False,
    )

    communication_consent = db.Column(
        db.Boolean,
        nullable=False,
        default=False,
    )

    message = db.Column(
        db.Text,
        nullable=True,
    )

    source = db.Column(
        db.String(80),
        nullable=False,
        default="website",
    )

    created_at = db.Column(
        db.DateTime,
        nullable=False,
        default=lambda: datetime.now(timezone.utc).replace(
            tzinfo=None
        ),
    )


FEATURES = [
    {
        "id": 1,
        "title": "Premium Location",
        "description": (
            "Connected living in the heart of Badlapur "
            "with everyday essentials close by."
        ),
    },
    {
        "id": 2,
        "title": "Thoughtful Design",
        "description": (
            "Well-planned homes designed around comfort, "
            "natural light, and daily ease."
        ),
    },
    {
        "id": 3,
        "title": "Lifestyle Amenities",
        "description": (
            "Spaces for wellness, celebration, relaxation, "
            "and time together."
        ),
    },
]


with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return jsonify({
        "message": "Thanekar DNSB Backend is running successfully"
    })


@app.route("/api/health")
def health():
    try:
        db.session.execute(text("SELECT 1"))

        return jsonify({
            "status": "success",
            "message": "Backend API is working",
            "database": "connected",
        })

    except Exception:
        app.logger.exception("Database health check failed")

        return jsonify({
            "status": "error",
            "message": "Database connection failed",
            "database": "disconnected",
        }), 500


@app.route("/api/features", methods=["GET"])
def features():
    return jsonify({
        "features": FEATURES
    })


@app.route("/api/contact", methods=["POST"])
def contact():
    payload = request.get_json(silent=True) or {}

    name = str(
        payload.get("name", "")
    ).strip()

    email = str(
        payload.get("email", "")
    ).strip()

    country_code = str(
        payload.get("country_code")
        or payload.get("countryCode")
        or "India(+91)"
    ).strip()

    phone = str(
        payload.get("phone", "")
    ).strip()

    message = str(
        payload.get("message", "")
    ).strip()

    source = str(
        payload.get("source", "website")
    ).strip() or "website"

    privacy_consent = bool(
        payload.get(
            "privacy_consent",
            payload.get("privacyConsent", False),
        )
    )

    communication_consent = bool(
        payload.get(
            "communication_consent",
            payload.get("communicationConsent", False),
        )
    )

    if not name:
        return jsonify({
            "status": "error",
            "message": "Name is required.",
        }), 400

    if not phone:
        return jsonify({
            "status": "error",
            "message": "Phone number is required.",
        }), 400

    phone_digits = "".join(
        character
        for character in phone
        if character.isdigit()
    )

    if country_code == "India(+91)":
        if (
            len(phone_digits) != 10
            or phone_digits[0] not in "6789"
        ):
            return jsonify({
                "status": "error",
                "message": (
                    "Please enter a valid 10-digit Indian "
                    "mobile number starting with 6, 7, 8, or 9."
                ),
            }), 400

    elif len(phone_digits) < 7 or len(phone_digits) > 15:
        return jsonify({
            "status": "error",
            "message": "Please enter a valid mobile number.",
        }), 400

    if not privacy_consent:
        return jsonify({
            "status": "error",
            "message": "Privacy consent is required.",
        }), 400

    enquiry = Enquiry(
        name=name,
        email=email or None,
        country_code=country_code,
        phone=phone_digits,
        privacy_consent=privacy_consent,
        communication_consent=communication_consent,
        message=message or None,
        source=source,
    )

    try:
        db.session.add(enquiry)
        db.session.commit()

        return jsonify({
            "status": "success",
            "message": (
                "Thank you. Your enquiry has been received."
            ),
            "enquiry_id": enquiry.id,
        }), 201

    except Exception:
        db.session.rollback()
        app.logger.exception(
            "Failed to save enquiry"
        )

        return jsonify({
            "status": "error",
            "message": (
                "Unable to save your enquiry. "
                "Please try again."
            ),
        }), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True,
    )
