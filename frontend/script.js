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
        loadCargo();
    }

    else if (section === "emergency") {
        loadEmergency();
    }

    else if (section === "personnel") {
        loadPersonnel();
    }
}


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

    } catch (error) {
        console.error(error);
        alert("❌ Backend connection failed!");
    }
}


async function loadCargo() {

    try {
        const response = await fetch(
            "http://127.0.0.1:5000/api/cargo"
        );

        const data = await response.json();

        alert(
            "🚢 CARGO TRACKING\n\n" +
            data.map(function(cargo) {
                return (
                    cargo.cargo_id + " - " +
                    cargo.item + "\n" +
                    "Status: " + cargo.status
                );
            }).join("\n\n")
        );

    } catch (error) {
        console.error(error);
        alert("❌ Backend connection failed!");
    }
}


async function loadPersonnel() {

    try {
        const response = await fetch(
            "http://127.0.0.1:5000/api/personnel"
        );

        const data = await response.json();

        alert(
            "👥 PERSONNEL STATUS\n\n" +
            "Total: " + data.total + "\n" +
            "Safe: " + data.safe + "\n" +
            "Monitoring: " + data.monitoring + "\n" +
            "Emergency: " + data.emergency
        );

    } catch (error) {
        console.error(error);
        alert("❌ Backend connection failed!");
    }
}


async function loadEmergency() {

    try {
        const response = await fetch(
            "http://127.0.0.1:5000/api/emergency"
        );

        const data = await response.json();

        alert(
            "🚨 " + data.risk_level + " RISK\n\n" +
            "Zone: " + data.zone + "\n" +
            "Affected Personnel: " + data.affected_personnel + "\n" +
            "Nearest Safe Station: " + data.nearest_safe_station + "\n\n" +
            "Recommended Action:\n" +
            data.recommended_action
        );

    } catch (error) {
        console.error(error);
        alert("❌ Backend connection failed!");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    console.log("POLAROPS SYSTEM INITIALIZED");
});
