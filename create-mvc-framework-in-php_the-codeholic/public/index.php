<?php
use App\core\Application;
use App\controllers\SiteController;


require_once "../vendor/autoload.php";

$app = new Application(dirname(__DIR__));

$app->router->get("/", [SiteController::class, "get_home"]);

$app->router->get("/contact", [SiteController::class, "get_contact"]);
$app->router->post("/contact", [SiteController::class, "post_contact"]);

$app->run();