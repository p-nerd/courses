<?php

use Core\App;
use Core\Database;
use Core\Validator;

$email    = $_POST["email"];
$password = $_POST["password"];


// validate inputs

$errors = [];

if (!Validator::email($email)) {
    $errors["email"] = "Please provide a valid email address";
}

if (!Validator::string($password, 7, 255)) {
    $errors["password"] = "Please provide a password of at least seven characters";
}

if (!empty($errors)) {
    view("auth/create-login.view.php", [
        "banner" => "Login with a Account Again",
        "errors" => $errors,
        "email" => $email,
        "password" => $password
    ]);
}


$db = App::resolve(Database::class);

// check if the user already exits

$user = $db
    ->query("SELECT * FROM users WHERE email = :email", [":email" => $email,])
    ->find();

if (!$user || !password_verify($password, $user["password"])) {
    view("auth/create-login.view.php", [
        "banner" => "Login with a Account Again",
        "errors" => [
            "password" => "No matching account found for that email address and password."
        ],
        "email" => $email,
        "password" => $password
    ]);
}

login($user);
redirect("/");
exit();