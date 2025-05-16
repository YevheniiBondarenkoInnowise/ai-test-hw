-- a) Total sales for March 2024
SELECT SUM(amount) AS total_sales_march_2024
FROM orders
WHERE order_date BETWEEN '2024-03-01' AND '2024-03-31';

-- b) Customer with the highest total spend
SELECT customer, SUM(amount) AS total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;

-- c) Average order value over Jan–Mar 2024
SELECT AVG(amount) AS avg_order_value_jan_mar_2024
FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31'; 