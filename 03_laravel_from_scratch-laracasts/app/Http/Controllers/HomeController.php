<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function index(): View
    {
        $posts = Post::latest()->with("category", "author")->get();
        $categories = Category::all();

        return view('home', [
            "posts" => $posts,
            "categories" => $categories
        ]);
    }

    public function indexByCategory(Category $category)
    {
        return view('home', [
            "posts" => $category->posts,
            "currentCategory" => $category,
            "categories" => Category::all()
        ]);
    }
}
