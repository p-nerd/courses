<?php

namespace App\core;

class Controller
{
    public string $layout = "main";

    function set_layout(string $layout)
    {
        $this->layout = $layout;
    }
    function render(string $view, array $params = [])
    {
        return Application::$app->router->render_view($view, $params);
    }
}