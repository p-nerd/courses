<?php

namespace App\core;

class Request
{
    public Method $method;
    function __construct()
    {
        $this->method = new Method();
    }
    function get_path()
    {
        $full_path              = $_SERVER["REQUEST_URI"] ?? "/";
        $question_mark_position = strpos($full_path, "?");
        if (!$question_mark_position) {
            return $full_path;
        }
        return substr($full_path, 0, $question_mark_position);
    }
    function get_body()
    {
        $method = $this->method->get_method();
        $body   = [];

        if ($method === "get") {
            $body = $this->sanitize_body($_GET, INPUT_GET);
        } else if ($method === "post") {
            $body = $this->sanitize_body($_POST, INPUT_POST);
        }

        return $body;
    }
    private function sanitize_body(array $input, int $input_type)
    {
        $body = [];
        foreach ($input as $key => $value) {
            $body[$key] = filter_input($input_type, $key, FILTER_SANITIZE_SPECIAL_CHARS);
        }
        return $body;
    }
}