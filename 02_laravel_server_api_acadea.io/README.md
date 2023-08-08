## ORM keywords

-   Mutator
-   Accessor
-   Relationship
-   Casting

## Takeaways

### Takeaway x

-   Laravel offers us factory helpers functions like has() and for() to quickly generate relations for our records
-   We can use the sync() method to generate many-to-many relation records

### Takeaway x2: Routes

-   Api routes typically refers to routes that return JSON, while web routes are routes that return HTML
-   We define api routes in api.php file and web routes in web.php file in the routes folder
-   Laravel uses the 'substitute bindings middleware' to automatically load model instance to the controller.

### Takeaway x3: API Resource Controllers

-   Controller is a function that runs when a HTTP request hits a route
-   We can delegate our route controllers into a dedicated Laravel Controller class.
-   There are 5 main methods in the controller class.
    -   index - displays a list of resource.
    -   store - create a new resource.
    -   show - displays a specific resource
    -   update - update a specific resource
    -   destroy - delete a specific resource
-   The resource route helper methods enables us to easily define API routes.

### Takeaway x4: Route Group

-   Route group can help us to effectively organize our API routes
-   We can either use the array syntax or the method syntax to define a route group.
-   We can add URL prefix, route name prefix namespace and middleware to a route group
-   The where() method is useful to add matching constraint to URL parameters.

### Takeaway x5: Automatically Load Files Recursively

-   Iterator is an object that allows us to iterate through a series of items.
-   The directory iterator can help use to automatically load our routes in a directory

### Essential Eloquent 101

-   Laravel's ORM - Eloquent provides an easy API for us to work with database.
-   We use the query method to start database query, get() to retrieve records, find() to find by id, create() to insert record, update() to update and delete() to delete record.
-   Laravel protects the model fields form mass assignment by default. To enable mass assignment, we will define the $fillable property in the model.
-   $hidden wil hide model fields when we convert the model into an array, and $append will add extra fields to the array.

### Database Transactions

-   Database Transaction groups multiple database operations together and only applies the operations when all of them passed. It will rollback any changes if one of the operations failed.
-   We use the transaction() method in the DB facade to trigger a transaction.

### Robust API Response

-   Resource class helps us to manage our API JSON response on one place
-   It makes our API response to be more consistent and maintainable.
-   We can use the php artisan make:resource command toe generate the resource boilerplate.

### Paginated API Response

-   Pagination is the notion of displaying our query results by page, otherwise we would have to send everything to the client.
-   We call the paginate() method on our query to create a paginator. We can then pass the paginator to our resource collection for a paginated JSON response.
