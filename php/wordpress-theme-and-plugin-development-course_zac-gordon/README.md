## Links

-   https://github.com/zgordon/wp-dev-course

## Template tags functions in Wordpress

-   `get_headers()`
-   `get_footer()`
-   `get_sidebar()`
-   `get_template_part()`
-   `wp_login_form()`
-   `bloginfo()`
-   `the_title()`
-   `get_the_title()`
-   `the_content()`
-   `the_author()`
-   `the_category()`
-   `the_tags()`
-   `comment_author()`
-   `the_post_thumbnail()`
-   `the_permalink()`
-   `edit_post_link()`
-   `site_url()`
-   `wp_nav_menu()`

## Conditional tags functions in Wordpress

-   `is_front_page()`
-   `is_home()`
-   `is_admin()`
-   `is_single()`
-   `is_single('slug')`
-   `is_single(['slug-1', 'slug-2', 'slug-3'])`
-   `is_singular()`
-   `get_post_type()`
-   `has_excerpt()`
-   `is_page()`
-   `is_page('slug')`
-   `is_page(['slug-1', 'slug-2', 'slug-3'])`
-   `is_page_template('custom.php')`
-   `comments_open()`
-   `is_category()`
-   `is_tag()`
-   `is_archive()`
-   `in_the_loop()`

## Wordpress Hooks

-   Hooks allow you to add custom code into existing software.
-   `Action Hooks` let you run your own code when certain events take place in the wordpress run cycle.
-   `Filter Hooks` let you modify how content is displayed on a page or saved to the database.
-   Review - Wordpress Hooks
    -   `Actions Hooks` let you run you own code when different events occur.
    -   `Filter Hooks` let you modify how data is displayed or saved
    -   Generally used in functions.php file in themes or plugin files

## Child Theme Architecture

-   Child Theme
    -   Reference toe parent theme in style.css file
    -   Include parent style in functions.php file
    -   Copies of any templates from Parent Theme you want to modify
-   Parent Theme
    -   Keeps all original file unedited
    -   Before loading a file, WordPress looks to see if exists in Child Theme
    -   Can be updated without affecting code in Child Theme

## Starter Theme

-   Basics
    -   Include common theme template files
    -   No CSS styles (but some include Bootstrap/Foundation)
    -   Extra functionality in functions.php
    -   Extra hooks in template files
    -   Follow modular file architecture
    -   Some include workflow tools
    -   Usually edited directly, not via child themes
-   A Few WordPress Starter Themes
    -   Underscore by WP Core Team
    -   JointsWP
    -   Understrap
    -   Sage
