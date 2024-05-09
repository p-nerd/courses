<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobListingController;

Route::view('/', "home", ['greeting' => 'Hello, Shihab']);
Route::view('/contact', "contact");

// Route::controller(JobListingController::class)->group(function () {
//     Route::get('/jobs', "index");
//     Route::get('/jobs/create', "create");
//     Route::post('/jobs', "store");
//     Route::get('/jobs/{job:id}', "show");
//     Route::get('/jobs/{job}/edit', "edit");
//     Route::patch('/jobs/{job}', "update");
//     Route::delete('/jobs/{job}',  "destroy");
// });

Route::resource("/jobs", JobListingController::class);
