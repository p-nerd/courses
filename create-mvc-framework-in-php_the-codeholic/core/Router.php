<?php

namespace App\core;

class Router
{
    protected array $routes = [];
    private Request $request;
    private Response $response;
    function __construct(Request $request, Response $response)
    {
        $this->request  = $request;
        $this->response = $response;
    }
    function get($path, $callback)
    {
        $this->routes["get"][$path] = $callback;
    }
    function post($path, $callback)
    {
        $this->routes["post"][$path] = $callback;
    }
    function resolve()
    {
        $path   = $this->request->get_path();
        $method = $this->request->method->get_method();

        $callback = $this->routes[$method][$path] ?? false;

        if ($callback === false) {
            $this->response->set_status_code(404);
            return $this->render_view("_404");
        }

        if (is_string($callback)) {
            return $this->render_view($callback);
        }

        if (is_array($callback) && count($callback) === 2) {
            Application::$app->controller = new $callback[0]();
            $callback[0]                  = Application::$app->controller;
        }

        return call_user_func($callback, $this->request);
    }
    function render_view(string $view, array $params = [])
    {
        $view_content = $this->get_view_content($view, $params);
        $page         = $this->render_content($view_content);
        $html         = $this->render_html($page);
        return $html;
    }
    private function render_html(string $page)
    {
        $base_content = $this->get_base_content();
        $html         = str_replace("{{base}}", $page, $base_content);
        return $html;
    }
    private function render_content(string $content)
    {
        $layout_content = $this->get_layout_content();
        $page           = str_replace("{{content}}", $content, $layout_content);
        return $page;
    }
    protected function get_base_content()
    {
        $app = Application::$app;
        ob_start();
        require_once Application::$app->path->layouts() . "/_base.php";
        return ob_get_clean();
    }
    protected function get_layout_content()
    {
        $layout = Application::$app->controller->layout;
        $app    = Application::$app;
        ob_start();
        require_once Application::$app->path->layouts() . "/$layout.php";
        return ob_get_clean();
    }
    protected function get_view_content(string $view, $params)
    {
        $app = Application::$app;
        foreach ($params as $key => $value) {
            $$key = $value;
        }
        ob_start();
        require_once Application::$app->path->views() . "/$view.php";
        return ob_get_clean();
    }
}