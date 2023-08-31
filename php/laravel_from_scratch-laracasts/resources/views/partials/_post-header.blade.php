<header class="max-w-xl mx-auto mt-20 text-center">
    <h1 class="text-4xl">
        Latest <span class="text-blue-500">Laravel From Scratch</span> News
    </h1>

    <div class="space-y-2 lg:space-y-0 lg:space-x-4 mt-4">
        <!--  Category -->
        @include("partials._category-dropdown")


        <!-- Other Filters -->
        <div class="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl">
            <label>
                <select class="flex-1 appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold">
                    <option value="category" disabled selected>Other Filters
                    </option>
                    <option value="foo">Foo
                    </option>
                    <option value="bar">Bar
                    </option>
                </select>
            </label>

            <x-icon name="down-arrow" class="absolute pointer-events-none" style="right: 12px;"/>
        </div>

        <!-- Search -->
        <x-search :value="$search"/>
    </div>
</header>
