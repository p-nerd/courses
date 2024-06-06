<?php

namespace App\Controllers;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class RootController
{
    #[Route('/')]
    public function index()
    {
        return new Response('Hello World');
    }
}
