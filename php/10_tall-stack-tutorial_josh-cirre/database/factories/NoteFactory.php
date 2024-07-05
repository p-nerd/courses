<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\odel=Note>
 */
class NoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence,
            'body' => fake()->paragraph,
            'send_date' => fake()->date,
            'is_published' => fake()->boolean,
            'heart_count' => fake()->numberBetween(0, 100),
            'user_id' => User::inRandomOrder()->first()->id,
        ];
    }
}
