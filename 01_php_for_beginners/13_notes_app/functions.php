<?php

function dd($value)
{
    echo "<pre>";
    var_dump($value);
    echo "</pre>";
    die();
}

function isUrl($value)
{
    return $_SERVER["REQUEST_URI"] === $value;
}

function authorize(bool $condition, int $status = Response::FORBIDDEN)
{
    if (!$condition) {
        abort($status);
    }
}