<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $users = User::query();
        return new JsonResponse($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(): JsonResponse
    {
        return new JsonResponse(["data" => "posted"]);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user): JsonResponse
    {
        return new JsonResponse($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(): JsonResponse
    {
        return new JsonResponse(["data" => "updated"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(): JsonResponse
    {
        return new JsonResponse(["data" => "deleted"]);

    }
}
