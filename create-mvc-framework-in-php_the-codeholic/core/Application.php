<?php

namespace App\core;

class Application
{
    public static string $ROOT_DIR;
    public Router $router;
    public Request $request;
    public Response $response;
    public static Application $app;
    function __construct(string $root_dir)
    {
        self::$ROOT_DIR = $root_dir;
        self::$app      = $this;
        $this->request  = new Request();
        $this->response = new Response();
        $this->router   = new Router($this->request, $this->response);
    }
    function run()
    {
        echo $this->router->resolve();
    }
}