<?php

namespace App\core;

abstract class Model
{
    function load_data($data)
    {
        foreach ($data as $key => $value) {
            if (property_exists($this, $key)) {
                $this->{$key} = $value;
            }
        }
    }
    function validate()
    {

    }
}