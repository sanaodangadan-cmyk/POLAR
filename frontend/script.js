// ============================================
// POLAROPS - FRONTEND JAVASCRIPT
// ============================================


// ============================================
// SIDEBAR NAVIGATION
// ============================================

function showSection(section) {

    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".menu button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });


    // Find the button that was clicked
    const clickedButton = event.target.closest("button");

    if (clickedButton) {
        clickedButton.classList.add("active");
    }


    // Show message according to selected section

    if (section === "dashboard") {

        console.log("Dashboard selected");

    }

    else if (section === "inventory") {

        alert(
            "📦 INVENTORY MANAGEMENT\n\n" +
            "Fuel: 72%\n" +
            "Food: 88%\n" +
            "Medicine: 35%\n" +
            "Oxygen: 25%\n\n" +
            "⚠️ Some items require attention."
        );

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
            "✓ Safe station identified\n" +
            "✓ Nearby vehicle identified\n\n" +
            "Recommended Action:\n" +
            "Relocate personnel to Station B."
        );

        console.log("Emergency response started.");

    }

    else {

        console.log("Emergency response cancelled.");

    }

}



// ============================================
// DASHBOARD INITIALIZATION
// ============================================

document.addEventListener("DOMContentLoaded", function() {

    console.log("=================================");
    console.log("POLAROPS SYSTEM INITIALIZED");
    console.log("=================================");

    console.log("Dashboard ready.");
    console.log("Inventory module ready.");
    console.log("Cargo module ready.");
    console.log("Emergency module ready.");
    console.log("Personnel module ready.");

});