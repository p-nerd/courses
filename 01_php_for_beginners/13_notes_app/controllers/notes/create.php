<?php

use Core\Database;
use Core\Validator;

$config = require base_path("config.php");

$errors = [];

$db = new Database($config["database"]);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $body = $_POST["body"];

    if (!Validator::string($body, 1, 1000)) {
        $errors["body"] = "body no more than 1,000 characters is required!";
    }

    if (empty($errors)) {
        $db->query("INSERT INTO notes(body, user_id) VALUES (:body, :userId);", [
            "body" => $body,
            "userId" => 1,
        ]);
    }
}

view("notes/create.view.php", [
    "banner" => "Create Note",
    "errors" => $errors
]);