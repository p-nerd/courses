<div class="relative w-32 flex lg:inline-flex items-center bg-gray-100 rounded-xl">
    <div x-data="{ show: false }">
        <div class="flex appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold text-left">
            <button
                @click="show = !show"
                @click.away="show = false"
            >
                {{ isset($currentCategory) ? ucwords($currentCategory->name) : "Categories" }}
            </button>
            @include("partials._down-arrow-icon")
        </div>

        <div x-show="show" style="display: none" class=" py-2 absolute bg-gray-100 w-full mt-2 rounded-xl z-50">
            <a
                href="/"
                class="
                    {{ !isset($currentCategory) ? "bg-blue-500 text-white hover:text-black" : ""}}
                    block leading-6 pl-3 pr-9 text-sm hover:bg-gray-300 focus:bg-gray-300
                "
                style="text-align: left"
            >
                All
            </a>
            @foreach ($categories as $category)
                <a
                    href="/categories/{{ $category->slug }}"
                    class="
                        {{ isset($currentCategory) && $category->id === $currentCategory->id ? "bg-blue-500 text-white hover:text-black" : "" }}
                        block leading-6 pl-3 pr-9 text-sm hover:bg-gray-300 focus:bg-gray-300
                    "
                    style="text-align: left"
                >
                    {{ ucwords($category->name) }}
                </a>
            @endforeach
        </div>
    </div>
</div>
