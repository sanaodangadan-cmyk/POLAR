from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


# ==========================================
# HOME / TEST
# ==========================================

@app.route("/")
def home():

    return jsonify({
        "message": "PolarOps Backend is running!",
        "status": "success"
    })


# ==========================================
# INVENTORY
# ==========================================

@app.route("/api/inventory")
def inventory():

    data = {
        "fuel": 72,
        "food": 88,
        "medicine": 35,
        "oxygen": 25
    }

    return jsonify(data)


# ==========================================
# CARGO
# ==========================================

@app.route("/api/cargo")
def cargo():

    data = [

        {
            "cargo_id": "C102",
            "item": "Scientific Equipment",
            "quantity": 10,
            "status": "In Transit"
        },

        {
            "cargo_id": "C103",
            "item": "Medical Supplies",
            "quantity": 25,
            "status": "Delivered"
        },

        {
            "cargo_id": "C104",
            "item": "Fuel Containers",
            "quantity": 30,
            "status": "Delayed"
        }

    ]

    return jsonify(data)


# ==========================================
# PERSONNEL
# ==========================================

@app.route("/api/personnel")
def personnel():

    data = {

        "total": 42,
        "safe": 35,
        "monitoring": 7,
        "emergency": 0

    }

    return jsonify(data)


# ==========================================
# EMERGENCY
# ==========================================

@app.route("/api/emergency")
def emergency():

    data = {

        "risk_level": "HIGH",

        "zone": "Research Zone C",

        "affected_personnel": 6,

        "nearest_safe_station": "Station B",

        "recommended_action":
            "Relocate personnel to Station B"

    }

    return jsonify(data)


# ==========================================
# START SERVER
# ==========================================

if __name__ == "__main__":

    app.run(debug=True)
