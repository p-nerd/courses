## Artisan commands

```sh
php artisan make:migration # generating migration file
php artisan make:model  # generating model file

php artisan db:seed # seeding database with text/fake data

php artisan migrate # running migration
php artisan migrate:refresh # refreshing tables schemas and removing all fake data
php artisan migrate:refresh --seed # refreshing tables and seeding new fake datas
```
