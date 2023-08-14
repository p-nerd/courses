<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, "index"])->name("home");

Route::get("/categories/{category:slug}", [PostController::class, "indexByCategory"]);

Route::get("/posts/create", [PostController::class, "create"]);
Route::get('/posts/{post:slug}', [PostController::class, "show"]);