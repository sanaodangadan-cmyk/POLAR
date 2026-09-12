# POLAROPS - INVENTORY SHORTAGE PREDICTION


def predict_shortage(current_stock, daily_consumption, days):
    """
    Predict whether the available stock is enough
    for the given number of days.
    """

    required_stock = daily_consumption * days

    if current_stock < required_stock:
        shortage = required_stock - current_stock

        return {
            "status": "SHORTAGE WARNING",
            "required_stock": required_stock,
            "shortage_amount": shortage
        }

    else:
        remaining_stock = current_stock - required_stock

        return {
            "status": "STOCK SUFFICIENT",
            "required_stock": required_stock,
            "remaining_stock": remaining_stock
        }


# --------------------------------
# TEST DATA
# --------------------------------

current_stock = 500
daily_consumption = 40
days = 15


# Run prediction
result = predict_shortage(
    current_stock,
    daily_consumption,
    days
)


# Display result
print("================================")
print("POLAROPS INVENTORY PREDICTION")
print("================================")

print("Current Stock:", current_stock)
print("Daily Consumption:", daily_consumption)
print("Prediction Period:", days, "days")

print("Required Stock:", result["required_stock"])
print("Status:", result["status"])

if result["status"] == "SHORTAGE WARNING":
    print("Shortage Amount:", result["shortage_amount"])
else:
    print("Remaining Stock:", result["remaining_stock"])