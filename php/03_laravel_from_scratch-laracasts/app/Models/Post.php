<?php

namespace App\Models;

use App\Traits\ModelTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property mixed $author
 * @method filter(string[] $array)
 */
class Post extends Model
{
    use HasFactory, ModelTrait;

    protected $fillable = [
        "title",
        "excerpt",
        "body",
        "published_at",
        "slug",
        "thumbnail"
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, "user_id");
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, "category_id");
    }

    /** @noinspection PhpUnused */
    public function scopeFilter($query, array $filters): void
    {
        if ($filters["search"] ?? false) {
            $search = $filters["search"];
            $query
                ->where("title", "like", "%$search%")
                ->orWhere("body", "like", "%$search%");
        }
    }
}
