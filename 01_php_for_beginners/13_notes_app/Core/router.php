<?php

$routes = require base_path("routes.php");

function routeToController($path, $routes)
{
    if (array_key_exists($path, $routes)) {
        require base_path($routes[$path]);
    } else {
        abort();
    }
}

function abort($code = 404)
{
    http_response_code($code);
    require base_path("views/$code.view.php");
    die();
}

$uri  = $_SERVER["REQUEST_URI"];
$path = parse_url($uri)["path"];

routeToController($path, $routes);