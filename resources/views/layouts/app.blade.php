<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- SEO -->
    <title>@yield('title'){{ config('app.name') }}</title>
    <meta content="@yield('description')" name="description">
    <link rel="canonical" href="@yield('canonical')" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="@yield('title'){{ config('app.name') }}" />
    <meta property="og:description" content="@yield('description')" />
    <meta property="og:image" content="/storage/images/design/about-bg.jpg" />
    <meta property="og:url" content="@yield('canonical')" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:site_name" content="{{config('app.name')}}" />
    <meta name="twitter:image:alt" content="{{config('app.name')}} Logo" />
    <meta name="keywords"
        content="sacs bottega veneta, sacs gucci, sacs coach, sacs michael kors, sacs a main luxe, sacs aldo maroc, sacs aldo prix, sacs, vêtement, Articles de Sport, Luxe Et Moderne, Meilleur Cuir, Fabriqué en Turquie" />
    <script type="application/ld+json">
        {
              "@context" : "http://schema.org",
              "@type" : "LocalBusiness",
              "name" : "Tousalik",
              "email" : "",
              "openingHoursSpecification" : {
                "@type" : "OpeningHoursSpecification",
                "dayOfWeek" : {
                  "@type" : "DayOfWeek",
                  "name" : "Lundi-Samedi"
                },
                "opens" : "09:00",
                "closes" : "20:00"
              }
            }
    </script>


    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/storage/images/design/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/storage/images/design/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/storage/images/design/favicons/favicon-16x16.png">
    <link rel="manifest" href="/storage/images/design/favicons/site.webmanifest">
    <link rel="mask-icon" href="/storage/images/design/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#000000">
    <meta name="theme-color" content="#ffffff">


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
