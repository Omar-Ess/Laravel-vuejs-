<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <!-- SEO -->
  <title>{{ config('app.name', 'Laravel') }}</title>
  <meta name="google-site-verification" content="cZHO1JcjQOlRMRZfdgGSP6t3zx5hHXi4Uz4y9FLSwWM" />


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
  <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

  <!-- Styles -->
  <link href="{{ asset('css/admin/app.css') }}" rel="stylesheet">
  <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet"
    crossorigin="anonymous" />
</head>

<body id="page-top">
  @auth
  <script>
    window.appName="{{config('app.name' , 'Tapis')}}"
    window.authUser=@json(auth()->user());
     window.Laravel = {!! json_encode([
          'csrfToken'=>csrf_token()
     ])!!}
  </script>
  @endauth

  <div id="app">


    <app csrf={{ csrf_token() }}> </app>
  </div>




  <!-- Scripts -->

  <script src="{{ asset('js/admin/app.js') }}"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js">
  </script>
  <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>
</body>

</html>
