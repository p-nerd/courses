<?php

namespace App\core;

class Response
{
    function set_status_code(int $status_code)
    {
        http_response_code($status_code);
    }
}