<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

 {{-- fav icon --}}
 <link href="/storage/images/design/favicon.png" rel="icon">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/admin/app.css') }}" rel="stylesheet">
    <link href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css" rel="stylesheet"
    crossorigin="anonymous" />
</head>
<body  id="page-top">
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

        <script src="{{ asset('js/admin/app.js') }}" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        <script src="http://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js">
        </script>
        <script src="https://cdn.datatables.net/1.10.20/js/dataTables.bootstrap4.min.js" crossorigin="anonymous"></script>
</body>
</html>
