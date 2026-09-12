// ============================================
// POLAROPS - FRONTEND JAVASCRIPT
// ============================================

// SIDEBAR NAVIGATION

function showSection(section, event) {

    const buttons = document.querySelectorAll(".menu button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    if (event) {
        const clickedButton = event.target.closest("button");

        if (clickedButton) {
            clickedButton.classList.add("active");
        }
    }

    if (section === "dashboard") {

        console.log("Dashboard selected");

    }

    else if (section === "inventory") {

        loadInventory();

    }

    else if (section === "cargo") {

        alert(
            "🚢 CARGO TRACKING\n\n" +
            "C102 - Scientific Equipment\n" +
            "Status: In Transit\n\n" +
            "C103 - Medical Supplies\n" +
            "Status: Delivered\n\n" +
            "C104 - Fuel Containers\n" +
            "Status: Delayed"
        );

    }

    else if (section === "emergency") {

        emergencyAlert();

    }

    else if (section === "personnel") {

        alert(
            "👥 PERSONNEL STATUS\n\n" +
            "Total Personnel: 42\n" +
            "Safe: 35\n" +
            "Monitoring: 7\n" +
            "Emergency: 0"
        );

    }
}


// ============================================
// INVENTORY - BACKEND CONNECTION
// ============================================

async function loadInventory() {

    try {

        const response = await fetch(
            "http://127.0.0.1:5000/api/inventory"
        );

        const data = await response.json();

        alert(
            "📦 INVENTORY FROM BACKEND\n\n" +
            "Fuel: " + data.fuel + "%\n" +
            "Food: " + data.food + "%\n" +
            "Medicine: " + data.medicine + "%\n" +
            "Oxygen: " + data.oxygen + "%"
        );

    }

    catch (error) {

        console.error(error);

        alert("❌ Backend connection failed!");

    }
}


// ============================================
// EMERGENCY RESPONSE
// ============================================

function emergencyAlert() {

    const confirmResponse = confirm(
        "🚨 HIGH RISK ALERT\n\n" +
        "Severe weather detected in Research Zone C.\n\n" +
        "Personnel affected: 6\n" +
        "Nearest safe station: Station B\n\n" +
        "Start emergency response?"
    );

    if (confirmResponse) {

        alert(
            "🚨 EMERGENCY RESPONSE STARTED\n\n" +
            "✓ Personnel identified\n" +
            "✓ Safe station identified\n\n" +
            "Recommended Action:\n" +
            "Relocate personnel to Station B."
        );

    }

}


// ============================================
// SYSTEM INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", function() {

    console.log("POLAROPS SYSTEM INITIALIZED");

});



