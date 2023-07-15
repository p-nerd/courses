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

function redirect(string $uri)
{
    header("location: {$uri}");
}

function login($user)
{
    $_SESSION['user'] = [
        'email' => $user["email"]
    ];

    session_regenerate_id(true);
}

function logout()
{
    $_SESSION = [];
    session_destroy();

    $params = session_get_cookie_params();
    setcookie(
        'PHPSESSID',
        '',
        time() - 3600,
        $params['path'],
        $params['domain'],
        $params['secure'],
        $params['httponly']
    );
}