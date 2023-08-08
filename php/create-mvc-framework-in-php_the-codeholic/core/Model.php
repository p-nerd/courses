<?php

namespace App\core;

abstract class Model
{
    const RULE_REQUIRED = "required";
    const RULE_EMAIL = "email";
    const RULE_MAX = "max";
    const RULE_MIN = "min";
    const RULE_MATCH = "match";
    public array $errors = [];
    abstract function rules();
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
        foreach ($this->rules() as $attribute => $rules) {
            $value = $this->{$attribute};
            foreach ($rules as $rule) {
                $ruleName = $rule;
                if (!$ruleName) {
                    $ruleName = $rule[0];
                }
                if ($ruleName === self::RULE_REQUIRED && !$value) {
                    $this->add_error($attribute, self::RULE_REQUIRED);
                }
                if ($ruleName === self::RULE_EMAIL && !filter_var($value, FILTER_VALIDATE_EMAIL)) {
                    $this->add_error($attribute, self::RULE_EMAIL);
                }
                if ($ruleName === self::RULE_MIN && strlen($value) < $rule["min"]) {
                    $this->add_error($attribute, self::RULE_MIN);
                }
                if ($ruleName === self::RULE_MAX && strlen($value) > $rule["max"]) {
                    $this->add_error($attribute, self::RULE_MAX);
                }
            }
        }
        // print_r($this->rules());
        return empty($this->errors) ? true : $this->errors;
    }
    private function add_error(string $attribute, string $rule_type)
    {
        $message                    = $this->get_error_messages()[$rule_type] ?? "";
        $this->errors[$attribute][] = $message;
    }
    private function get_error_messages()
    {
        return [
            self::RULE_REQUIRED => "This field is required",
            self::RULE_EMAIL => "This field must be valid email address",
            self::RULE_MIN => "Minimum length of this field  must be {min}",
            self::RULE_MAX => "Maximum length of this field must be {max}",
            self::RULE_MATCH => "This filed must be the same as {match}"
        ];
    }
}