from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)

# Enable CORS for React
CORS(app)

# --------------------------------------------------
# Paths
# --------------------------------------------------

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FLOOR_PLANS_FOLDER = os.path.join(BASE_DIR, "floor_plans")


# --------------------------------------------------
# Project Data
# --------------------------------------------------

project_data = {
    "project": {
        "name": "Thanekar DNSB",
        "location": "Badlapur East",
        "description": (
            "Thanekar DNSB is a thoughtfully designed residential and commercial "
            "development in Badlapur, offering modern homes and premium retail "
            "shops in a well-connected location. The project features well-planned "
            "residences, quality construction, lifestyle amenities, landscaped open "
            "spaces, and commercial spaces designed for business growth. With easy "
            "access to schools, hospitals, railway stations, and everyday "
            "conveniences, Thanekar DNSB provides an ideal destination for "
            "comfortable living and smart investment. Whether you're looking for "
            "your dream home or a commercial shop for your business, Thanekar DNSB "
            "offers the perfect blend of convenience, connectivity, and long-term value."
        )
    },

    "commercial": {
        "configuration": "G+2 Shops Commercial",
        "area_start": "262 sq.ft.",
        "price_start": "60 Lakh",
        "area_end": "1011 sq.ft.",
        "price_end": "4 Crore"
    },

    "residential": {
        "configurations": [
            {
                "type": "2BHK / 3BHK",
                "build_up": "1058 sq.ft.",
                "carpet": "688 sq.ft."
            },
            {
                "type": "2BHK / 3BHK",
                "build_up": "1210 sq.ft.",
                "carpet": "716 sq.ft."
            },
            {
                "type": "2BHK / 3BHK",
                "build_up": "1228 sq.ft.",
                "carpet": "800 sq.ft."
            },
            {
                "type": "2BHK / 3BHK",
                "build_up": "1280 sq.ft.",
                "carpet": "842 sq.ft."
            },
            {
                "type": "3BHK",
                "build_up": "2022 sq.ft.",
                "carpet": "1314 sq.ft."
            }
        ]
    },

    "pricing": {
        "2bhk": "Starting from 70 Lakh*",
        "3bhk": "Starting from 86 Lakh*"
    },

    "offers": [
        "8 Lakh Discount*"
    ],

    "amenities": [
        "Party Hall",
        "Open Gym",
        "Garden",
        "Gazebo"
    ],

    "location": {
        "address": "Gandhi Chowk, Badlapur East",
        "google_maps": "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac"
    },

    "contact": {
        "phone": "8390662002",
        "whatsapp": "8390662002",
        "email": "groupthanekar@gmail.com",
        "instagram": "https://www.instagram.com/thanekar_group?igsh=ZTNpa3N3YnB0eWVn"
    },

    "developer": {
        "name": "Thanekar Group",
        "description": (
            "Thanekar Group is a real estate company started by "
            "Mr. Ajay Madhukar Thanekar in 1991. The group is a trusted "
            "developer with 57+ successfully delivered projects. "
            "Mr. Ajay Thanekar is also the President of the "
            "Badlapur–Ambernath Builders Association and a MahaRERA Conciliator."
        )
    },

    "floor_plans": [
        {
            "name": "2BHK Floor Plan 1",
            "type": "image",
            "file": "2bhk-plan-1.jpg"
        },
        {
            "name": "2BHK Floor Plan 2",
            "type": "image",
            "file": "2bhk-plan-2.jpg"
        },
        {
            "name": "3BHK Floor Plan",
            "type": "image",
            "file": "3bhk-plan-1.jpg"
        },
        {
            "name": "Commercial Floor Plan",
            "type": "pdf",
            "file": "commercial-plan.pdf"
        }
    ]
}


# --------------------------------------------------
# Health Check
# --------------------------------------------------

@app.route("/")
def home():
    return jsonify({
        "status": "success",
        "message": "Thanekar DNSB Flask API is running"
    })


# --------------------------------------------------
# Project Details API
# --------------------------------------------------

@app.route("/api/project-details", methods=["GET"])
def get_project_details():

    data = project_data.copy()

    # Add dynamic URLs for floor plans
    floor_plans = []

    for plan in project_data["floor_plans"]:
        plan_copy = plan.copy()

        plan_copy["url"] = (
            f"http://127.0.0.1:5000/floor-plans/{plan['file']}"
        )

        floor_plans.append(plan_copy)

    data["floor_plans"] = floor_plans

    return jsonify(data)


# --------------------------------------------------
# Floor Plan / Image / PDF Serving
# --------------------------------------------------

@app.route("/floor-plans/<path:filename>")
def serve_floor_plan(filename):

    return send_from_directory(
        FLOOR_PLANS_FOLDER,
        filename
    )


# --------------------------------------------------
# Error Handlers
# --------------------------------------------------

@app.errorhandler(404)
def not_found(error):
    return jsonify({
        "status": "error",
        "message": "API endpoint or file not found"
    }), 404


@app.errorhandler(500)
def server_error(error):
    return jsonify({
        "status": "error",
        "message": "Internal server error"
    }), 500


# --------------------------------------------------
# Run Application
# --------------------------------------------------

if __name__ == "__main__":
    os.makedirs(FLOOR_PLANS_FOLDER, exist_ok=True)

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )