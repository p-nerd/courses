<x-base>
    @include("components.posts.index-header");
    
    <main class="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">

        @include('components.home.first-grid-post', ['post' => $posts[0]])

        <div class="lg:grid lg:grid-cols-2">
            @include('components.home.second-grid-post', ['post' => $posts[1]])
            @include('components.home.second-grid-post', ['post' => $posts[2]])
        </div>

        <div class="lg:grid lg:grid-cols-3">
            @include('components.home.second-grid-post', ['post' => $posts[3]])
            @include('components.home.second-grid-post', ['post' => $posts[4]])
            @include('components.home.second-grid-post', ['post' => $posts[5]])
        </div>
    </main>
</x-base>
