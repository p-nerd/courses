<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', function () {
    return view("welcome");
});

if (App::environment("local")) {

    Route::get("/playground", function () {
        \App\Repositories\UserRepository::create([
            "name" => fake()->name(),
            "email" => fake()->safeEmail(),
            "password" => "12345"
        ]);

        return "none";
    });
}

//Lang::setLocale("bn");
//App::setLocale("bn");
//
//dd(Lang::get("auth.failed"));
//dd(__("auth.failed"));
//dd(__("auth.throttle", ["seconds" => 100]));
//dd(App::currentLocale());
//dd(App::isLocal("bn"));
//dd(trans_choice("auth.pants", 1));
//dd(trans_choice("auth.pants", 2));

//dump(trans_choice("auth.apples", -5));
//dump(trans_choice("auth.apples", 0));
//dump(trans_choice("auth.apples", 1));
//dump(trans_choice("auth.apples", 6, ["baskets" => 2]));

//dump(__("auth.welcome ", ["name" => "shihab"]));

//dd();
