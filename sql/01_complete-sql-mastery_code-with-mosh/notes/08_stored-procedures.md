# Stored Procedures

- Store procedures store and organize SQL codes
- Faster execution
- Data security

## Create Store Procedure Functions

```sql
CREATE PROCEDURE get_clients()
BEGIN
	SELECT * FROM clients;
END
```

## Create Store Procedure Functions

```sql
DROP PROCEDURE get_clients;
```

```sql
DROP PROCEDURE IF EXISTS get_clients;
```

## Parameter Of Store Procedure

```sql
CREATE PROCEDURE get_clients_by_state(state CHAR(2))
BEGIN
	SELECT * FROM clients c WHERE c.state = state;
END
```

```sql
CALL get_clients_by_state ('CA');
```
