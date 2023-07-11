<?php

namespace Core;

use Core\Container;

class App
{
    protected static $container;
    public static function setContainer(Container $container)
    {
        static::$container = $container;
    }
    public static function getContainer(): Container
    {
        return static::$container;
    }
    public static function resolve(string $key)
    {
        return static::getContainer()->resolve($key);
    }
    public static function bind(string $key, $resolver)
    {
        static::getContainer()->bind($key, $resolver);
    }
}
