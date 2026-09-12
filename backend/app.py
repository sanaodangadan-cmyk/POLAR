from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# -----------------------------
# HOME / TEST API
# -----------------------------
@app.route("/")
def home():
    return jsonify({
        "message": "PolarOps Backend is running!",
        "status": "success"
    })


# -----------------------------
# INVENTORY API
# -----------------------------
@app.route("/api/inventory")
def inventory():

    inventory_data = {
        "fuel": 72,
        "food": 88,
        "medicine": 35,
        "oxygen": 25
    }

    return jsonify(inventory_data)


# -----------------------------
# CARGO API
# -----------------------------
@app.route("/api/cargo")
def cargo():

    cargo_data = [
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

    return jsonify(cargo_data)


# -----------------------------
# PERSONNEL API
# -----------------------------
@app.route("/api/personnel")
def personnel():

    personnel_data = {
        "total": 42,
        "safe": 35,
        "monitoring": 7,
        "emergency": 0
    }

    return jsonify(personnel_data)


# -----------------------------
# EMERGENCY / RISK API
# -----------------------------
@app.route("/api/emergency")
def emergency():

    emergency_data = {
        "risk_level": "HIGH",
        "zone": "Research Zone C",
        "affected_personnel": 6,
        "nearest_safe_station": "Station B",
        "recommended_action": "Relocate personnel to Station B"
    }

    return jsonify(emergency_data)


# -----------------------------
# RUN SERVER
# -----------------------------
if __name__ == "__main__":
    app.run(debug=True)