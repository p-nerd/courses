<?php

namespace App\Repositories;

use App\Models\Post;

interface Repository
{
    public static function create(string $title, $body, $userIDs): Post;

    public static function update(Post $post, $title, $body, $userIDs): Post;

    public static function delete(Post $post): bool;
}
