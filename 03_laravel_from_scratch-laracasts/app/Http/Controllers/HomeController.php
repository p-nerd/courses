<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function index(): View
    {
        $posts = Post::all()->sortByDesc("published_at");
        $categories = Category::all();

        return view('home', [
            "posts" => $posts,
            "categories" => $categories
        ]);
    }
}
