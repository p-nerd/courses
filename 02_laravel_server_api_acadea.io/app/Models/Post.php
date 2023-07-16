<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property mixed $title
 */
class Post extends Model
{
    use HasFactory;

    protected $casts = [
        "body" => "array"
    ];

    // Accessor
    // now we can get title with upper like a member variable
    // with "title_upper_case"
    /** @noinspection PhpUnused */
    public function getTitleUpperCaseAttribute(): string
    {
        return strtoupper($this->title);
    }

    // Mutator
    // this function will call and mutate the "title" field with give logic
    /** @noinspection PhpUnused */
    public function setTitleAttribute($title): void
    {
        $this->attributes["title"] = strtolower($title);
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class, "post_id");
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class, "post_user_pivot", "post_id", "user_id");
    }
}
