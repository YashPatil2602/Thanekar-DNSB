from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow React frontend to communicate with Flask
CORS(app)


PROJECT_DETAILS = {
    "project_name": "Thanekar DNSB",

    "description": (
        "Thanekar DNSB is a thoughtfully designed residential and "
        "commercial development in Badlapur, offering modern homes "
        "and premium retail shops in a well-connected location. "
        "The project features well-planned residences, quality "
        "construction, lifestyle amenities, landscaped open spaces, "
        "and commercial spaces designed for business growth. "
        "With easy access to schools, hospitals, railway stations, "
        "and everyday conveniences, Thanekar DNSB provides an ideal "
        "destination for comfortable living and smart investment."
    ),

    "location": {
        "address": "Gandhi Chowk, Badlapur East",
        "google_maps": "https://maps.app.goo.gl/47T3Mmq2bMsQFqaEA?g_st=ac"
    },

    "contact": {
        "phone": "8390662002",
        "whatsapp": "https://wa.me/918390662002",
        "email": "groupthanekar@gmail.com",
        "instagram": (
            "https://www.instagram.com/thanekar_group/"
        )
    },

    "residential": {
        "pricing": {
            "2BHK": "Starting from 70 Lakh*",
            "3BHK": "Starting from 86 Lakh*"
        },

        "configurations": [
            {
                "build_up": "1058 sq.ft.",
                "carpet": "688 sq.ft."
            },
            {
                "build_up": "1210 sq.ft.",
                "carpet": "716 sq.ft."
            },
            {
                "build_up": "1228 sq.ft.",
                "carpet": "800 sq.ft."
            },
            {
                "build_up": "1280 sq.ft.",
                "carpet": "842 sq.ft."
            },
            {
                "build_up": "2022 sq.ft.",
                "carpet": "1314 sq.ft."
            }
        ]
    },

    "commercial": {
        "configuration": "G+2 Shops Commercial",

        "starting": {
            "carpet_area": "262 sq.ft.",
            "price": "60 Lakh"
        },

        "ending": {
            "carpet_area": "1011 sq.ft.",
            "price": "4 Crore"
        }
    },

    "offer": {
        "discount": "8 Lakh Discount*"
    },

    "amenities": [
        "Party Hall",
        "Open Gym",
        "Garden",
        "Gazebo"
    ],

    "developer": {
        "name": "Thanekar Group",
        "description": (
            "Thanekar Group is a real estate company started by "
            "Mr. Ajay Madhukar Thanekar in 1991. The group has "
            "successfully delivered 57+ projects and has established "
            "a strong presence in the real estate industry. "
            "Mr. Ajay Thanekar is also the President of the "
            "Badlapur–Ambernath Builders Association and a "
            "MahaRERA Conciliator."
        )
    }
}


@app.route("/")
def home():
    return jsonify({
        "success": True,
        "message": "Thanekar DNSB Flask Backend is running"
    })


@app.route("/api/project-details", methods=["GET"])
def project_details():
    return jsonify({
        "success": True,
        "data": PROJECT_DETAILS
    })


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )