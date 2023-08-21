# Laravel API Server

## ORM keywords

- Mutator
- Accessor
- Relationship
- Casting

## Takeaways

### Takeaway x

- Laravel offers us factory helpers functions like has() and for() to quickly generate relations for our records
- We can use the sync() method to generate many-to-many relation records

### Takeaway x2: Routes

- Api routes typically refers to routes that return JSON, while web routes are routes that return HTML
- We define api routes in api.php file and web routes in web.php file in the routes folder
- Laravel uses the 'substitute bindings middleware' to automatically load model instance to the controller.

### Takeaway x3: API Resource Controllers

- Controller is a function that runs when an HTTP request hits a route
- We can delegate our route controllers into a dedicated Laravel Controller class.
- There are 5 main methods in the controller class.
    - index - displays a list of resource.
    - store - create a new resource.
    - show - displays a specific resource
    - update - update a specific resource
    - destroy - delete a specific resource
- The resource route helper methods enables us to easily define API routes.

### Takeaway x4: Route Group

- Route group can help us to effectively organize our API routes
- We can either use the array syntax or the method syntax to define a route group.
- We can add URL prefix, route name prefix namespace and middleware to a route group
- The where() method is useful to add matching constraint to URL parameters.

### Takeaway x5: Automatically Load Files Recursively

- Iterator is an object that allows us to iterate through a series of items.
- The directory iterator can help use to automatically load our routes in a directory

### Essential Eloquent 101

- Laravel's ORM - Eloquent provides an easy API for us to work with database.
- We use the query method to start database query, get() to retrieve records, find() to find by id, create() to insert
  record, update() to update and delete() to delete record.
- Laravel protects the model fields form mass assignment by default. To enable mass assignment, we will define the
  $fillable property in the model.
- $hidden wil hide model fields when we convert the model into an array, and $append will add extra fields to the array.

### Database Transactions

- Database Transaction groups multiple database operations together and only applies the operations when all of them
  passed. It will roll back any changes if one of the operations failed.
- We use the transaction() method in the DB facade to trigger a transaction.

### Robust API Response

- Resource class helps us to manage our API JSON response on one place
- It makes our API response to be more consistent and maintainable.
- We can use the php artisan make:resource command toe generate the resource boilerplate.

### Paginated API Response

- Pagination is the notion of displaying our query results by page, otherwise we would have to send everything to the
  client.
- We call the paginate() method on our query to create a paginator. We can then pass the paginator to our resource
  collection for a paginated JSON response.

### Repository Pattern

- Repository is class that take care of Model Operations
- Repository manage model operation in one place and improves maintainability of the app

### Exception class and Error handling

- Creating custom exception class in our app can ensure consistent API responses for error handling.
- The report() method is responsible for reporting or logging the exception.
- The render() method is responsible for sending error back to the client.
- The abort() helper function is a quick way to send back an error response.
- The report() helper function calls the report() method in specified exception class.

### Using event in API Server

- Events listener are classes / functions that get executed when an event is dispatched.
- We define our events - Event Listener mapping in the EventServiceProvider.
- Event Subscribers is a class that let us to group or event - listener mapping in one place.
- We register Subscribers in subscribe property in EventServiceProvider

### Building & Sending Email

- Laravel Mail class offers us an easy way to define and send out application emails
- Mailstrp.io is a fake SMTP testing service that allow us to test email in our local environment
- Laravel allows us to write our mail template in Markdown syntax
- We can use the mail facade to send out email

### Unit Test vs Feature Test vs E2E Test

- Unit testing is the notion of testing the smallest units/building blocks in out app i.e. functions. if the building
  block is working, then app should work. (This is not necessarily true).
- Feature testing focuses on the feature and outcome rather than the individual functions. It is more reliable than unit
  testing but slower.
- End-to-End testing mocks the end user's behavior and has the highest reliability. However, E2E is very hard to
  implement and very slow

### Unit Testing Essentials

- Laravel use PHPUnit as it's official testing library
- Laravel provide TestCase class basically it is enhanced version of the one provided by PHPUnit. Laravel TestCase class
  loads a lot of helpers functions for us to use.
- We should write tests on both "happy path" and "sad path" for our functions.

### Feature Testing Essentials

- Provides the '--filter' flag to PHPUnit allows us to run a specific test.
- Event::fake() stops events to dispatching in our app and allows up to capture and asserts event dispatching.
- The json() method allow us to easily perform HTTP requests to our API endpoints.

### PHPUnit live reload Tests

- PHPUnit watcher is a wonderful package that automatically rerun out tests whenever our source code changes
- It is great tool that will save us lots of time and make us happier in long run.

### Power up with composer scripts

- Composer script handy shorthand that allow us to define and run complex commands.
- If we want to supply additional argument to the scripts, we need to supply also the "--" after the script name.

### Test Driven Development

- Test Driven Development (TDD) is the idea of writing test first and write code later.
- We would write the bare minimum code to pass our test and refactor our code as we progress to the more advanced tests.

### Testing: How much is Enough?

### Validating HTTP Requests

- We can define Request class to easily validate incoming http Request.
- We inject Request class in controller method to get Laravel to perform validation from on the incoming requests.
- We can crate custom validation rule either by closure or a dedicated rule class.

### Custom validation with validator.

- Validator is an alternative way to validate input data other than using the Request class.
- Validator has the benefit of providing us a lot of helper functions to work with validation.

### Autocomplete Magic IDE helper

- Laravel uses a lot of facades and magic methods that are not IDE friendly.
- The IDE helper package solves this issue by generating and '_ide_helper.php' file to aid autocompletion.

### Config & Env Variables

- config() is a handy helper function to access configuration values from the config folder.
- We use dot notation to access the configuration.
- env() is helper function to access environmental variables

### Generating API docs with Scribe

- scribe is amazing package that help us to generate API documentation in a beautiful webpage.
- We use the @ directive in PHPDocs to provide details about our API endpoints.

### Throttle & Rate limiting: All you need to know

- Throttle means to limit the number of operations in a given number of time.
- The throttle middleware in Laravel helps to mitigate Denials-of-Service (Dos) attacks from malicious user
- We can define name Rate limiter in Route Service Provider
- We can pass in the rate limiting config directly to the throttle middleware if we prefer not to use named Rate
  Limiter.

### Fortify and Authentication Introduction

- Laravel Fortify is a package that takes care of most authentication logic for us.
- Fortify provides us several features out of the box namely:
    1. Register
    2. Login
    3. Reset Password
    4. Email Verification
    5. Update Profile Information
    6. Update Password
    7. 2-Factor Authentication

### Fortify: Authentication Register & Password Reset

- Laravel protects all it's web routes from CSRF attack by default.
- We need Laravel Sanctum if we want to protect our API routes from CSRF attack.
- We can use Fortify Actions classes to customize the user registration logic along with other actions.
- Password Reset requires a GET route with a route name of "password.reset" in order to work properly.

### Fortify: Email Verification & Update User Profile

- Fortify provides us handy email verification feature to confirm the email address.
- We can use the verify middleware to protect our app's routes.
- We will need to implement the "MustVerifyEmail" interface to our user model for email verification to work.
 
