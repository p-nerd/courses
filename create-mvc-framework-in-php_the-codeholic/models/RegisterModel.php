<?php

namespace App\models;

class RegisterModel extends \App\core\Model
{
    public string $name;
    public string $email;
    public string $password;
    public string $confirm_password;

    function save()
    {
        echo "Creating new user";
    }
}