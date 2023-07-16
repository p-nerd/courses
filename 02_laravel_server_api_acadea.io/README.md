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
