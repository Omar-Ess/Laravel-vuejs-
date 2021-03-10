<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }} @yield('title')</title>

    <!-- Favicons -->
    <link href="/storage/images/design/favicon.png" rel="icon">
    {{-- <link href="/storage/images/design/apple-touch-icon.png" rel="apple-touch-icon"> --}}


    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>


    <div id="app">
        {{-- Navbar --}}
        @include('includes.navbar')

        {{-- Hero --}}


        @yield('content')

        {{-- Footer --}}
        @include('includes.footer')

        <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>

    </div>

    <!-- scripts -->
    <script src="{{ asset('js/app.js') }}"></script>

</body>

</html>
