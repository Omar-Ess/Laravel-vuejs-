@extends('layouts.app')
@section('title')
 | Contact
@endsection
@section('content')
    {{-- <div id="preloader"></div> --}}

    @include('includes.breadcrumb' , ['page'=>'contact'])
    <!-- ======= Contact Section ======= -->
    @include('includes.contact-section')
    <!-- End Contact Section -->
@endsection
