@props(["value"])

<div class="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl px-3 py-2">
    <form method="GET" action="/">
        <label>
            <input
                type="text"
                name="search"
                placeholder="Find something"
                class="bg-transparent placeholder-black font-semibold text-sm"
                value="{{ $value }}"
            >
        </label>
    </form>
</div>
