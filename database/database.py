import sqlite3


# Connect to database
connection = sqlite3.connect("polarops.db")

cursor = connection.cursor()


# --------------------------------
# INVENTORY TABLE
# --------------------------------

cursor.execute("""
CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_name TEXT NOT NULL,
    category TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    daily_consumption INTEGER NOT NULL
)
""")


# --------------------------------
# CARGO TABLE
# --------------------------------

cursor.execute("""
CREATE TABLE IF NOT EXISTS cargo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cargo_id TEXT NOT NULL,
    item_name TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    origin TEXT,
    destination TEXT,
    status TEXT,
    eta TEXT
)
""")


# --------------------------------
# PERSONNEL TABLE
# --------------------------------

cursor.execute("""
CREATE TABLE IF NOT EXISTS personnel (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT,
    location TEXT,
    status TEXT
)
""")


# --------------------------------
# RISK / EMERGENCY TABLE
# --------------------------------

cursor.execute("""
CREATE TABLE IF NOT EXISTS emergency (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    zone TEXT NOT NULL,
    risk_level TEXT NOT NULL,
    affected_personnel INTEGER,
    available_resources TEXT,
    recommended_action TEXT
)
""")


# Save changes
connection.commit()

print("PolarOps database created successfully!")


# Close connection
connection.close()