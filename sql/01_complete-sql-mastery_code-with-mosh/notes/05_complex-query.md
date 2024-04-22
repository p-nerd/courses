# Writing complex query

## Subqueries

```sql
SELECT *
FROM products
WHERE
	unit_price > (
		SELECT unit_price
		FROM products
		WHERE product_id = 3
    )
```

```sql
SELECT
	*
FROM
	employees
WHERE
	salary >= (
		SELECT
			AVG(salary)
		FROM
			employees)
```

## In Operator

```sql
SELECT
	*
FROM
	products
WHERE
	product_id NOT IN( SELECT DISTINCT
			product_id FROM order_items)
```

-- Finc Clients without invoices

```sql
SELECT
	*
FROM
	clients
WHERE
	client_id NOT IN( SELECT DISTINCT
			client_id FROM invoices)
```

## Subqueries vs Joins

```sql
SELECT *
FROM clients
LEFT JOIN invoices USING (client_id)
WHERE invoice_id IS NULL
```

```sql
SELECT DISTINCT
	customer_id,
	first_name,
	last_name
FROM
	orders
	JOIN order_items USING (order_id)
	JOIN customers USING (customer_id)
WHERE
	product_id = 3
```

## All keyword

```sql
SELECT
	*
FROM
	invoices
WHERE
	invoice_total >= (
		SELECT
			MAX(invoice_total)
		FROM
			invoices
		WHERE
			client_id = 3)
```
