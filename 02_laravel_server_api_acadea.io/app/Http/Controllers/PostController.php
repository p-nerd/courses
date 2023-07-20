<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Repositories\PostRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PostController extends Controller
{
    public function index(Request $request): AnonymousResourceCollection
    {
        $pageSize = $request->page_size ?? 20;
        $posts = Post::query()->paginate($pageSize);
        return PostResource::collection($posts);
    }

    public function store(StorePostRequest $request): PostResource
    {
        $post = PostRepository::create($request->title, $request->body, $request->user_ids);
        return new PostResource($post);
    }

    public function show(Post $post): PostResource
    {
        return new PostResource($post);
    }

    /**
     * @throws \Exception
     */
    public function update(UpdatePostRequest $request, Post $post): PostResource
    {
        $updatedPost = PostRepository::update($post, $request->title, $request->body, $request->user_ids);
        return new PostResource($updatedPost);
    }

    /**
     * @throws \Exception
     */
    public function destroy(Post $post): JsonResponse
    {
        PostRepository::delete($post);
        return $this->happy([], 204);
    }
}
