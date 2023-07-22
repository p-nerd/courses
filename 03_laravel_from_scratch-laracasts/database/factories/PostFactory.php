<?php

namespace Database\Factories;

use App\Helpers\StringHelper;
use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{
    protected static int $sigCounter = 1;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(8, false);
        $slug = StringHelper::toSlug($title);

        $sig = self::$sigCounter;
        self::$sigCounter++;

        return [
            "title" => $title,
            "excerpt" => fake()->sentence(50, false),
            "body" => fake()->sentence(400),
            "published_at" => fake()->date("2020-01-01", now()),
            "slug" => $slug,
            "thumbnail" => "https://source.unsplash.com/random/1100x860?sig=${sig}",
            "user_id" => fake()->randomNumber(1, 10),
            "category_id" => fake()->randomNumber(1, 3)
        ];
    }
}
