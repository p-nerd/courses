<x-base-layout>
    <body class="font-sans antialiased bg-gray-50 text-black/50">
        <div
            class="relative flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"
        >
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                @if (Route::has('login'))
                <livewire:welcome.navigation />
                @endif
            </div>
        </div>
        <div class="flex flex-col items-center mx-auto mt-20 space-y-2 w-72">
            <x-application-logo class="w-20 h-20" />
            <x-button primary xl href="{{ route('register') }}">Get Started</x-button>
        </div>
    </body>
</x-base-layout>
