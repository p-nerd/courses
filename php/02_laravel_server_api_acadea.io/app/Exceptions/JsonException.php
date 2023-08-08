<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class JsonException extends Exception
{
    protected $code = 422;

    public function report()
    {

    }

    public function render(Request $request): JsonResponse
    {
        return new JsonResponse([
            "errors" => [
                "message" => $this->getMessage()
            ]
        ], $this->code);
    }
}
