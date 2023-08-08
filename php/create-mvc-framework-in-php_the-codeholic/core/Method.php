<?php

namespace App\core;

class Method
{
    function get_method()
    {
        return strtolower($_SERVER["REQUEST_METHOD"]);
    }
    function is_get()
    {
        return $this->get_method() === "get";
    }
    function is_post()
    {
        return $this->get_method() === "post";
    }
}