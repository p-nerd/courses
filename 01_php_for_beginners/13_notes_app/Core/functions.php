<?php

function abort($code = 404)
{
    http_response_code($code);
    require base_path("views/$code.view.php");
    die();
}

function dd($value)
{
    echo "<pre>";
    var_dump($value);
    echo "</pre>";
    die();
}

function isUrl(string $value): bool
{
    return $_SERVER["REQUEST_URI"] === $value;
}

function authorize(bool $condition, int $status = Core\Response::FORBIDDEN)
{
    if (!$condition) {
        abort($status);
    }
}

function base_path(string $relativePath): string
{
    return BASE_PATH . $relativePath;
}

function view(string $viewFileRelativePath, $attributes = [])
{
    extract($attributes);
    require base_path("views/" . $viewFileRelativePath);
}