<?php

$router->get("/", "controllers/home.php");
$router->get("/about", "controllers/about.php");
$router->get("/contact", "controllers/contact.php");

$router->get("/notes", "controllers/notes/index.php");
$router->get("/note", "controllers/notes/show.php");
$router->post("/notes", "controllers/notes/create.php");
$router->delete("/notes", "controllers/notes/destroy.php");