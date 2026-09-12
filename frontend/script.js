const API_URL = "http://127.0.0.1:5000";


// ==========================================
// SIDEBAR NAVIGATION
// ==========================================

const menuButtons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".section");

menuButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const sectionName = button.dataset.section;

        // Remove active from all buttons
        menuButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        button.classList.add("active");

        // Hide all sections
        sections.forEach(function(section) {
            section.classList.remove("active-section");
        });

        // Show selected section
        const selectedSection = document.getElementById(sectionName);

        if (selectedSection) {
            selectedSection.classList.add("active-section");
        }

        // Load data from backend
        if (sectionName === "inventory") {
            loadInventory();
        }

        if (sectionName === "cargo") {
            loadCargo();
        }

        if (sectionName === "emergency") {
            loadEmergency();
        }

        if (sectionName === "personnel") {
            loadPersonnel();
        }

    });

});


// ==========================================
// INVENTORY
// ==========================================

async function loadInventory() {

    try {

        const response = await fetch(API_URL + "/api/inventory");

        const data = await response.json();

        document.getElementById("fuel-value").textContent =
            data.fuel + "%";

        document.getElementById("food-value").textContent =
            data.food + "%";

        document.getElementById("medicine-value").textContent =
            data.medicine + "%";

        document.getElementById("oxygen-value").textContent =
            data.oxygen + "%";


        document.getElementById("fuel-bar").style.width =
            data.fuel + "%";

        document.getElementById("food-bar").style.width =
            data.food + "%";

        document.getElementById("medicine-bar").style.width =
            data.medicine + "%";

        document.getElementById("oxygen-bar").style.width =
            data.oxygen + "%";

        console.log("Inventory loaded:", data);

    }

    catch (error) {

        console.error("Inventory error:", error);

        alert("❌ Cannot connect to PolarOps backend.");

    }

}


// ==========================================
// CARGO
// ==========================================

async function loadCargo() {

    try {

        const response = await fetch(API_URL + "/api/cargo");

        const data = await response.json();

        const table = document.getElementById("cargo-table");

        table.innerHTML = "";

        data.forEach(function(cargo) {

            let badgeClass = "blue";

            if (cargo.status === "Delivered") {
                badgeClass = "green";
            }

            if (cargo.status === "Delayed") {
                badgeClass = "red";
            }

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${cargo.cargo_id}</td>
                <td>${cargo.item}</td>
                <td>${cargo.quantity}</td>
                <td>
                    <span class="badge ${badgeClass}">
                        ${cargo.status}
                    </span>
                </td>
            `;

            table.appendChild(row);

        });

        console.log("Cargo loaded:", data);

    }

    catch (error) {

        console.error("Cargo error:", error);

        alert("❌ Cannot connect to PolarOps backend.");

    }

}


// ==========================================
// PERSONNEL
// ==========================================

async function loadPersonnel() {

    try {

        const response =
            await fetch(API_URL + "/api/personnel");

        const data = await response.json();

        document.getElementById("total-personnel").textContent =
            data.total;

        document.getElementById("safe-personnel").textContent =
            data.safe;

        document.getElementById("monitoring-personnel").textContent =
            data.monitoring;

        document.getElementById("emergency-personnel").textContent =
            data.emergency;

        console.log("Personnel loaded:", data);

    }

    catch (error) {

        console.error("Personnel error:", error);

        alert("❌ Cannot connect to PolarOps backend.");

    }

}


// ==========================================
// EMERGENCY
// ==========================================

async function loadEmergency() {

    try {

        const response =
            await fetch(API_URL + "/api/emergency");

        const data = await response.json();

        document.getElementById("risk-level").textContent =
            data.risk_level;

        document.getElementById("risk-zone").textContent =
            data.zone;

        document.getElementById("affected-personnel").textContent =
            data.affected_personnel;

        document.getElementById("safe-station").textContent =
            data.nearest_safe_station;

        document.getElementById("recommended-action").textContent =
            data.recommended_action;

        console.log("Emergency data loaded:", data);

    }

    catch (error) {

        console.error("Emergency error:", error);

        alert("❌ Cannot connect to PolarOps backend.");

    }

}


// ==========================================
// START EMERGENCY RESPONSE
// ==========================================

document.getElementById("response-btn").addEventListener(
    "click",
    function() {

        const confirmation = confirm(
            "🚨 HIGH RISK ALERT\n\n" +
            "Start emergency response?"
        );

        if (confirmation) {

            alert(
                "🚨 EMERGENCY RESPONSE STARTED\n\n" +
                "Personnel identified.\n" +
                "Safe station identified.\n" +
                "Recommended action:\n" +
                "Relocate personnel to Station B."
            );

        }

    }
);


// ==========================================
// SYSTEM START
// ==========================================

console.log("================================");
console.log("POLAROPS FRONTEND STARTED");
console.log("================================");
