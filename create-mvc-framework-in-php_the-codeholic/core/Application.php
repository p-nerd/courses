<?php

namespace App\core;

class Application
{
    public static string $ROOT_DIR;
    public static Application $app;
    public Router $router;
    public Request $request;
    public Response $response;
    public Path $path;
    function __construct(string $root_dir)
    {
        self::$ROOT_DIR = $root_dir;
        self::$app      = $this;
        $this->request  = new Request();
        $this->response = new Response();
        $this->router   = new Router($this->request, $this->response);
        $this->path     = new Path($root_dir);
    }
    function run()
    {
        echo $this->router->resolve();
    }
}