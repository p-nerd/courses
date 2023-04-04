<?php

namespace App\controllers;

use App\core\Application;

class SiteController
{
    function get_home()
    {
        $params = [
            "name" => "The home page"
        ];
        return Application::$app->router->render_view("home", $params);
    }
    public function get_contact()
    {
        return Application::$app->router->render_view("contact");
    }
    public function post_contact()
    {
        return "Handling submission";
    }
}