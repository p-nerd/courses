<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix("users")
    ->as("users.")
//    ->middleware(["auth"])
    ->group(function () {
        Route::get("/", [UserController::class, "index"])
            ->name("index");
        Route::post("/", [UserController::class, "store"])
            ->name("store");
        Route::get("/{user}", [UserController::class, "show"])
            ->name("show")
            ->where("user", "[0-9]+");
//            ->withoutMiddleware(["auth"]);
        Route::patch("/{user}", [UserController::class, "update"])
            ->where("user", "[0-9]+")
            ->name("update");
        Route::delete("/{user}", [UserController::class, "destroy"])
            ->whereNumber("user")
            ->name("destroy");
    });
