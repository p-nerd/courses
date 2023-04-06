<?php

namespace App\controllers;

use App\core\Request;
use App\core\Controller;

class SiteController extends Controller
{
    function get_home()
    {
        $params = [
            "name" => "The home page"
        ];
        return $this->render("home", $params);
    }
    public function get_contact()
    {
        return $this->render("contact");
    }
    public function post_contact(Request $request)
    {
        $body = $request->get_body();
        print_r($body);

        return "Handling submission";
    }
}