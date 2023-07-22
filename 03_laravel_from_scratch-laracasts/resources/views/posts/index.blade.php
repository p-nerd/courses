<x-base>
    @include("components.posts.index-header", ["categories" => $categories]);

    <main class="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
        @foreach ($posts as $post)
            @include('components.home.first-grid-post', ['post' => $post])
        @endforeach
    </main>
</x-base>
