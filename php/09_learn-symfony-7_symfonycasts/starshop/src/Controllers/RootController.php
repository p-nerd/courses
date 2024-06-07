<?php

namespace App\Controllers;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;

class RootController extends AbstractController
{
    #[Route('/')]
    public function index()
    {
        return $this->render("root/home.html.twig", [
            "count" => 235,
        ]);
    }
}
