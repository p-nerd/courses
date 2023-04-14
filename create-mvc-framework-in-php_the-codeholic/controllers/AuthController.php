<?php

namespace App\controllers;

use App\core\Request;
use App\core\Controller;
use App\models\RegisterModel;

class AuthController extends Controller
{
    function register(Request $request)
    {
        $this->set_layout("auth");

        $register_modal = new RegisterModel();
        if ($request->method->is_post()) {
            $register_modal->load_data($request->get_body());

            if ($register_modal->validate() && $register_modal->save()) {
                return "Success";
            }
            print_r($register_modal->errors);
            return $this->render("register", ["model" => $register_modal]);
        }
        if ($request->method->is_get()) {
            return $this->render("register", ["model" => $register_modal]);
        }
    }
    function login(Request $request)
    {
        $this->set_layout("auth");

        if ($request->method->is_post()) {
            return "handle submitted data";
        }
        if ($request->method->is_get()) {
            return $this->render("login");
        }
    }
}