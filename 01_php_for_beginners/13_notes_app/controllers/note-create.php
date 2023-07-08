<?php


require("Database.php");
$config = require("config.php");

$db = new Database($config["database"]);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $db->query("INSERT INTO notes(body, user_id) VALUES (:body, :userId);", [
        "body" => $_POST["body"],
        "userId" => 1,
    ]);
}

$banner = "Create Note";

require "views/note-create.view.php";