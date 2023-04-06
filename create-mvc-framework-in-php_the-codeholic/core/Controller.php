<?php

namespace App\core;

class Controller
{
    function render(string $view, array $params = [])
    {
        return Application::$app->router->render_view($view, $params);
    }
}