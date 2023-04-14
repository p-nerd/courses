<?php

namespace App\models;

class RegisterModel extends \App\core\Model
{
    public string $name;
    public string $email;
    public string $password;
    public string $confirm_password;

    function rules()
    {
        return [
            "name" => [
                self::RULE_REQUIRED
            ],
            "email" => [
                self::RULE_REQUIRED,
                self::RULE_EMAIL
            ],
            "password" => [
                self::RULE_REQUIRED,
                [self::RULE_MIN, "min" => 8],
                [self::RULE_MAX, "max" => 24]
            ],
            "confirm_password" => [
                self::RULE_REQUIRED,
                [self::RULE_MATCH, "match" => "password"]
            ]
        ];
    }

    function save()
    {
        echo "Creating new user";
    }
}