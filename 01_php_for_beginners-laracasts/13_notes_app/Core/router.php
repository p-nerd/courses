<?php

namespace Core;

use Middleware\Middleware;

class Router
{
    protected $routes = [];
    public function get(string $path, string $controller)
    {
        return $this->add('GET', $path, $controller);
    }

    public function post(string $path, string $controller)
    {
        return $this->add('POST', $path, $controller);
    }

    public function delete(string $path, string $controller)
    {
        return $this->add('DELETE', $path, $controller);
    }

    public function put(string $path, string $controller)
    {
        return $this->add('PUT', $path, $controller);
    }

    public function patch(string $path, string $controller)
    {
        return $this->add('PATCH', $path, $controller);
    }

    public function only(string $key)
    {
        $last = array_key_last($this->routes);

        $this->routes[$last][array_key_last($this->routes[$last])]["middleware"] = $key;
        return $this;
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
            $route = $result[$method];
            $this->executeMiddleware($route["middleware"]);
            $this->executeController($route["controller"]);
        } else {
            $this->abort();
        }
    }
    protected function add(string $method, string $path, string $controller)
    {
        $this->routes[$path][$method] = [
            "controller" => $controller,
            "middleware" => null,
        ];
        return $this;
    }
    protected function executeController(string $controller)
    {
        require base_path($controller);
    }
    protected function executeMiddleware(string|null $middleware)
    {
        if (!$middleware) {
            return;
        }
        Middleware::resolve($middleware);
    }
    protected function abort()
    {
        abort(Response::NOT_FOUND);
    }
}