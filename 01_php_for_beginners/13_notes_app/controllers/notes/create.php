<?php

require "Database.php";
$config = require "config.php";

require "Validator.php";

$db = new Database($config["database"]);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $body = $_POST["body"];

    $errors = [];


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

$banner = "Create Note";

require "views/notes/create.view.php";