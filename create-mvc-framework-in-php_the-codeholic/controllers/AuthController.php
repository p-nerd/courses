<?php

namespace App\controllers;

use App\core\Request;
use App\core\Controller;

class AuthController extends Controller
{
    function register(Request $request)
    {
        $this->set_layout("auth");

        if ($request->method->is_post()) {
            print_r($request->get_body());
        }
        if ($request->method->is_get()) {
            return $this->render("register");
        }
    }
    function login(Request $request)
    {
        if ($request->method->is_post()) {
            return "handle submitted data";
        }
        if ($request->method->is_get()) {
            return $this->render("login");
        }
    }
}