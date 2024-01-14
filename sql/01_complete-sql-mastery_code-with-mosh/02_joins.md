# joins

## inner join

### basic join

```sql
SELECT
	*
FROM
	orders
	JOIN customers ON orders.customer_id = customers.customer_id;
```

### select specific columns

```sql
SELECT
	orders.order_id,
	customers.first_name,
	customers.last_name,
	customers.customer_id
FROM
	orders
	JOIN customers ON orders.customer_id = customers.customer_id;
```

### use alias to simply queries

```sql
SELECT
	o.order_id,
	c.first_name,
	c.last_name,
	c.customer_id
FROM
	orders o
	JOIN customers c ON o.customer_id = c.customer_id;
```

### joining multiple tables

```sql
SELECT
	o.order_id,
	p.product_id,
	p.name,
	o.order_date,
	oi.quantity,
	oi.unit_price
FROM
	order_items oi
	JOIN orders o ON o.order_id = oi.order_id
	JOIN products p ON p.product_id = oi.product_id;
```

### joining multiple databases

```sql
use sql_store;

SELECT
	p.product_id,
	p.name,
	oi.quantity,
	oi.unit_price
FROM
	order_items oi
	JOIN sql_inventory.products p ON p.product_id = oi.product_id;
```

prefix other database

```sql
use sql_inventory;

SELECT
	p.product_id,
	p.name,
	oi.quantity,
	oi.unit_price
FROM
	sql_store.order_items oi
	JOIN products p ON p.product_id = oi.product_id;
```

### self joins

```sql
use sql_hr;

SELECT
	e.employee_id,
	e.first_name,
	m.employee_id AS manager_id,
	m.first_name AS manager_first_name
FROM
	employees e
	JOIN employees m ON e.reports_to = m.employee_id;
```

### compound join conditions with composite primary keys

```sql
use sql_store;

SELECT
	*
FROM
	order_items oi
	JOIN order_item_notes oin ON oi.product_id = oin.product_id
		AND oi.order_id = oin.order_id;
```

### implicit join syntax (not recommended)

```sql
use sql_store;

SELECT
	*
FROM
	orders o,
	customers c
WHERE
	o.customer_id = c.customer_id
```
