Complete three independent tasks:

1. Web Application: Expense Calculator (HTML/JavaScript)
-------------------------------------------------------
• Build a simple UI where the user can:
  – Add new expense rows (Category + Amount).
  – Remove existing rows.
• When the user clicks “Calculate,” display:
  – Total expenses.
  – Average daily expense (assume a 30-day month).
  – Top 3 highest expenses (show category and amount).
• Keep the design minimal and the code clean. Include labeled inputs and a “Calculate” button.
• Produce code ready to paste into CodePen or JSFiddle.

2. API Testing: Defect Detection in Product Data (JavaScript for Postman/ReqBin)
---------------------------------------------------------------------------------
• Test the public API at https://fakestoreapi.com/products.
• Verify the HTTP response code is 200.
• For each product object, assert:
  – `title` exists and is not empty.
  – `price` is ≥ 0.
  – `rating.rate` exists and is ≤ 5.
• Collect and output a list of any products that violate these rules (missing/empty title, negative price, rating.rate > 5 or missing).

3. SQL Queries: Online Sales Data Analysis (SQLite)
---------------------------------------------------
Given a table `orders(id INTEGER PRIMARY KEY, customer TEXT, amount REAL, order_date DATE)` populated as follows:
INSERT INTO orders (customer, amount, order_date) VALUES ('Alice', 5000, '2024-03-01'), ('Bob', 8000, '2024-03-05'), ('Alice', 3000, '2024-03-15'), ('Charlie', 7000, '2024-02-20'), ('Alice', 10000, '2024-02-28'), ('Bob', 4000, '2024-02-10'), ('Charlie', 9000, '2024-03-22'), ('Alice', 2000, '2024-03-30');

Write three SQL queries to:
  a) Calculate total sales for March 2024.  
  b) Identify the customer with the highest total spend.  
  c) Compute the average order value over the last three months (Jan–Mar 2024).

Structure your response in three sections:
1. HTML/JS code for the expense calculator (with comments).  
2. JavaScript test scripts for the API (Postman/ReqBin).  
3. The three SQL queries.  
