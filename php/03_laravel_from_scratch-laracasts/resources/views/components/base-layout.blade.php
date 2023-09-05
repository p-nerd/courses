<!doctype html>

@include("partials._head")

<body style="font-family: Open Sans, sans-serif">
<section class="px-6 py-8">

    @include("partials._nav")

    {{ $slot }}

    @include("partials._footer")

    <x-flash/>

</section>
</body>
