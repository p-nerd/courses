<?php

namespace App\Models;

use App\Traits\ModelTrait;
use Barryvdh\LaravelIdeHelper\Eloquent;
use Database\Factories\PostFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Query\Builder;
use Illuminate\Support\Carbon;

/**
 * App\Models\Post
 *
 * @property mixed $author
 * @method filter(string[] $array)
 * @property int $id
 * @property string $title
 * @property string $excerpt
 * @property string $body
 * @property string|null $published_at
 * @property int $is_draft
 * @property string $slug
 * @property string|null $thumbnail
 * @property int $user_id
 * @property int $category_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read Category|null $category
 * @method static PostFactory factory($count = null, $state = [])
 * @method static Builder|Post newModelQuery()
 * @method static Builder|Post newQuery()
 * @method static Builder|Post query()
 * @method static Builder|Post whereBody($value)
 * @method static Builder|Post whereCategoryId($value)
 * @method static Builder|Post whereCreatedAt($value)
 * @method static Builder|Post whereExcerpt($value)
 * @method static Builder|Post whereId($value)
 * @method static Builder|Post whereIsDraft($value)
 * @method static Builder|Post wherePublishedAt($value)
 * @method static Builder|Post whereSlug($value)
 * @method static Builder|Post whereThumbnail($value)
 * @method static Builder|Post whereTitle($value)
 * @method static Builder|Post whereUpdatedAt($value)
 * @method static Builder|Post whereUserId($value)
 * @method static latest()
 * @mixin Eloquent
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
        $query->when($filters['search'] ?? false, fn($query, $search) => $query
            ->where('title', 'like', '%' . $search . '%')
            ->orWhere('body', 'like', '%' . $search . '%')
        );

        $query->when($filters['category'] ?? false, fn($query, $category) => $query
            ->whereHas('category', fn($query) => $query
                ->where('slug', $category)
            )
        );
    }
}
