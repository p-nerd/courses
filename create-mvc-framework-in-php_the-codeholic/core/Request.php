<?php

namespace App\core;

class Request
{
    function get_path()
    {
        $full_path              = $_SERVER["REQUEST_URI"] ?? "/";
        $question_mark_position = strpos($full_path, "?");
        if (!$question_mark_position) {
            return $full_path;
        }
        return substr($full_path, 0, $question_mark_position);
    }
    function get_method()
    {

        return strtolower($_SERVER["REQUEST_METHOD"]);
    }
}