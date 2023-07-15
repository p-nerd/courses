<?php

class User
{
    public function getProfile(): Profile
    {
        return new Profile;
//        return null;
    }
}

class Profile
{
    public function getEmployment(): string
    {
        return "Full-stack Developer";
    }
}

$user = new User;

//$profile = $user->getProfile();
//
//if ($profile) {
//    var_dump($profile->getEmployment());
//}

var_dump($user->getProfile()?->getEmployment());

