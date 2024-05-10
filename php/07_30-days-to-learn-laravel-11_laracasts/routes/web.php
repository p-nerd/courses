<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\JobListingController;
use Illuminate\Support\Facades\Route;

Route::view('/', 'home', ['greeting' => 'Hello, Shihab']);
Route::view('/contact', 'contact');

// Route::controller(JobListingController::class)->group(function () {
//     Route::get('/jobs', "index");
//     Route::get('/jobs/create', "create");
//     Route::post('/jobs', "store");
//     Route::get('/jobs/{job:id}', "show");
//     Route::get('/jobs/{job}/edit', "edit");
//     Route::patch('/jobs/{job}', "update");
//     Route::delete('/jobs/{job}',  "destroy");
// });

Route::resource('/jobs', JobListingController::class);

Route::get("/register", [AuthController::class, "registerCreate"]);
Route::post("/register", [AuthController::class, "registerStore"]);

Route::get("/login", [AuthController::class, "loginCreate"]);
Route::post("/login", [AuthController::class, "loginStore"]);
Route::post("/logout", [AuthController::class, "logout"]);
