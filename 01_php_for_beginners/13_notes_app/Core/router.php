<?php

namespace Core;

class Router
{
    protected $routes = [];

    protected function add(string $method, string $path, string $controller)
    {
        $this->routes[$path][$method] = $controller;
    }

    public function get(string $path, string $controller)
    {
        $this->add('GET', $path, $controller);
    }

    public function post(string $path, string $controller)
    {
        $this->add('POST', $path, $controller);
    }

    public function delete(string $path, string $controller)
    {
        $this->add('DELETE', $path, $controller);
    }

    public function put(string $path, string $controller)
    {
        $this->add('PUT', $path, $controller);
    }

    public function patch(string $path, string $controller)
    {
        $this->add('PATCH', $path, $controller);
    }

    protected function executeController(string $controller)
    {
        require base_path($controller);
    }

    protected function abort()
    {
        abort(Response::NOT_FOUND);
    }

    public function run(string $path, string $method)
    {
        $method = strtoupper($method);

        if (array_key_exists($path, $this->routes)) {
            $result = $this->routes[$path];
        } else {
            $this->abort();
        }

        if (array_key_exists($method, $result)) {
            $controller = $result[$method];
            $this->executeController($controller);
        } else {
            $this->abort();
        }
    }
}