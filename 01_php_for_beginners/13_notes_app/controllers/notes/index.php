<?php

$banner = "My Notes";

require("Database.php");
$config = require("config.php");

$db = new Database($config["database"]);

$notes = $db->query("select * from notes where user_id = 1;")->finds();

require "views/notes/index.view.php";