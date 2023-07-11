<?php

use Core\App;
use Core\Database;

$db = App::resolve(Database::class);

$currentUserId = 1;
$id            = $_POST["id"];

$note = $db->query("select * from notes where id = :id;", [":id" => $id])->findOrFail();

authorize($note["user_id"] === $currentUserId);

$db->query("delete from notes where id = :id;", [":id" => $id]);

header("location: /notes");
exit();
