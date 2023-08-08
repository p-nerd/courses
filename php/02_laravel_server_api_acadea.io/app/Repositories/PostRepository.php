<?php

namespace App\Repositories;

use App\Models\Post;
use Exception;
use Illuminate\Support\Facades\DB;

class PostRepository implements Repository
{
    public static function create(string $title, $body, $userIDs): Post
    {
        return DB::transaction(function () use ($title, $body, $userIDs) {
            /* @var $post Post */
            $post = Post::query()->create([
                "title" => $title,
                "body" => $body
            ]);

            $post->users()->sync($userIDs);
            return $post;
        });
    }

    /**
     * @throws Exception
     */
    public static function update(Post $post, $title, $body, $userIDs): Post
    {
        $updated = $post->update([
            "title" => $title ?? $post->title,
            "body" => $body ?? $post->body,
        ]);

        if (!$updated) {
            throw new Exception("Could not update post");
        }

        return $post;
    }

    /**
     * @throws Exception
     */
    public static function delete(Post $post): bool
    {
        $deleted = $post->forceDelete();
        if (!$deleted) {
            throw new Exception("Could not delete post");
        }
        return $deleted;
    }
}
