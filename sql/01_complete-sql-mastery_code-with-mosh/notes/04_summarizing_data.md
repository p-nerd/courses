## Aggregate Functions

```sql
SELECT
	MAX(invoice_total) AS highest,
	MIN(invoice_total) AS lowest,
	AVG(invoice_total) AS average,
	SUM(invoice_total) AS total,
	COUNT(invoice_total) AS number_of_invoices
FROM
	invoices;
```

```sql
SELECT
	MAX(payment_date)
FROM
	invoices;
```

null value is not accountable on aggregate functions

```sql
SELECT
	COUNT(invoice_total) AS number_of_invoices,
	COUNT(payment_date) AS count_of_payments
FROM
	invoices;
```

total records

```sql
SELECT
	COUNT(*) AS total_records
FROM
	invoices;
```
