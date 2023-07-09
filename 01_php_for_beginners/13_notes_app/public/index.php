<?php

const BASE_PATH = __DIR__ . "/../";

require BASE_PATH . "Core/functions.php";

spl_autoload_register(function (string $className) {
    $className = str_replace("/", DIRECTORY_SEPARATOR, $className);
    require base_path("Core/{$className}.php");
});

require base_path("Core/router.php");