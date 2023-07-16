<?php

namespace App;

use App\Facades\GeolocationFacade;
use App\Services\Geolocation;

class Playground
{
    public function __construct(Geolocation $geolocation)
    {
        // dependency injection
        $result = $geolocation->search("");
        dump($result);

        // facade pattern
        $result = GeolocationFacade::search("a");
        dump($result);
    }
}
