# POLAR
## Integrated Polar Expedition Logistics & Asset Management System

POLAR is a centralized decision-support and logistics management platform designed to support polar expeditions.

The system helps expedition teams monitor inventory, track cargo, identify operational risks, and receive AI-based inventory shortage predictions from a single dashboard.

---

## 🎯 Objectives

- Monitor essential expedition resources
- Track cargo and consignments in real time
- Identify delayed and high-priority cargo
- Monitor emergency and risk conditions
- Predict possible inventory shortages
- Provide decision-support information through a centralized dashboard

---

## 🚀 Key Features

### 1. Inventory Intelligence
- Monitor food, fuel, medicine, oxygen and other supplies
- View current stock and daily consumption
- Calculate inventory runway
- Identify low and critical stock
- Generate AI-based shortage predictions

### 2. Cargo Tracking
- Track cargo using unique Cargo IDs
- Monitor origin and destination
- Track quantity and ETA
- View cargo status:
  - Packed
  - In Transit
  - Delivered
  - Delayed
- Track cargo priority

### 3. Risk & Emergency Management
- Monitor emergency situations
- Display risk levels
- Identify affected personnel
- View available resources
- Provide recommended emergency actions

### 4. AI Inventory Prediction
The system analyzes current inventory and daily consumption to predict whether available stock will be sufficient for a selected period.

Example:

Current Stock → Daily Consumption → Required Stock → Shortage / Sufficient

---

## 🏗️ System Architecture

POLAR follows a modular architecture:

Frontend
↓
Flask Backend
↓
SQLite Database
↓
AI Prediction Module
↓
Decision Support Dashboard

---

## 📁 Project Structure

POLAR/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
├── ai/
│   └── prediction.py
│
├── database/
│   ├── database.py
│   └── polarops.db
│
└── README.md

---

## 🛠️ Technologies Used

- HTML
- CSS
- JavaScript
- Python
- Flask
- SQLite
- Pandas
- AI-based inventory prediction
- GitHub
- Google Colab

---

## 🔄 Workflow

1. User opens the POLAR dashboard.
2. Frontend requests data from the Flask backend.
3. Backend retrieves information from the SQLite database.
4. Inventory data is sent to the AI prediction module.
5. AI analyzes stock and consumption.
6. Prediction results are returned to the dashboard.
7. The dashboard displays inventory status, cargo information, risks and alerts.

---

## 🤖 AI Prediction Logic

The inventory prediction module calculates:

Required Stock = Daily Consumption × Prediction Period

If:

Current Stock < Required Stock

the system generates a **SHORTAGE WARNING**.

Otherwise, the system reports that the available stock is **SUFFICIENT**.

---

## 💻 Running the Project

### 1. Install dependencies

```bash
pip install -r backend/requirements.txt
