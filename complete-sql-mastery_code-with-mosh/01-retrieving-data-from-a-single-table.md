# Retrieving Data From a Single Table

## select statement

```sql
SELECT *
FROM customers
-- WHERE customer_id = 1
ORDER BY first_name
```

## select clause

### select all column

```sql
SELECT *
FROM customers;
```

### select specific column

```sql
SELECT
	first_name,
    last_name,
    points
FROM customers;
```

### arithmetic operation on select clause

```sql
SELECT
    points,
    points + 10,
    points - 10,
    points * 10,
    points / 10,
    points % 10,
    points + 10 * 100,
    (points + 10) * 100
FROM customers;
```

### alias of column name

```sql
SELECT
	points,
    (points + 10) * 100 AS discount_factor,
    (points + 10) * 100 AS 'discount factor',
    (points + 10) * 100 AS "discount factor"
FROM customers;
```

### getting distinct field

```sql
SELECT DISTINCT state
FROM customers;
```

### Exercise Return all the products with name, price, and new price (price \* 1.1)

```sql
SELECT
    name,
    unit_price,
    unit_price * 1.1 as "new price"
FROM products
```

## where clause

```sql
SELECT *
FROM customers
WHERE points > 3000
```

### comparison operator in sql

```sql
>  -- grater then
>= -- grater then and equal
<  -- less then
<= -- less then and equal
=  -- equal
!= -- not equal
<> -- not equal
```

### example with comparison operator in where clause

```sql
SELECT *
FROM customers
WHERE state = 'VA';
```

or

```sql
SELECT *
FROM customers
WHERE state = 'va';
```

above two sql state are equal;

### comparing date type in mysql

```sql
SELECT *
FROM customers
WHERE birth_date > '1990-01-01'; -- year-month-date
```

### exercise - get the orders placed in this year

```sql
SELECT *
FROM orders
WHERE order_date >= '2017-01-01';
```

### logical and, or, not operator

```sql
SELECT *
FROM customers
WHERE birth_date > '1990-01-01' AND points > 100
```

```sql
SELECT *
FROM customers
WHERE birth_date > '1990-01-01' OR points > 100
```

```sql
SELECT *
FROM customers
WHERE birth_date > '1990-01-01' OR (points > 100 AND state = 'VA')

-- logical operator precedence
-- AND
-- OR
-- NOT
```

```sql
SELECT *
FROM customers
WHERE NOT (birth_date > '1990-01-01' OR points > 1000);
```

or

```sql
SELECT *
FROM customers
WHERE (birth_date <= '1990-01-01' AND points <= 1000);
```

above two sql state are equal;

### exercise - from the order_items table, get the items for order #6 where the total price is greater then 30

```sql
SELECT *
FROM order_items
WHERE order_id = 6 AND unit_price * quantity >= 30
```
