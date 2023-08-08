<?php

namespace App\core;

class Path
{
    private string $app_root;
    function __construct(string $app_root)
    {
        $this->app_root = $app_root;
    }
    function root()
    {
        return $this->app_root;
    }
    function views()
    {
        return $this->root() . "/views";
    }
    function partials()
    {
        return $this->views() . "/partials";
    }
    function layouts()
    {
        return $this->views() . "/layouts";
    }
}