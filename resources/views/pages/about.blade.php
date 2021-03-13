@extends('layouts.app')
@section('title')
 | About
@endsection
@section('content')
    @include('includes.breadcrumb' , ['page'=>'propos'])
        <!-- ======= About Section ======= -->
        @include('includes.about-section')       <!-- End About Section -->


    <!-- ======= Featured Services Section ======= -->
    @include('includes.services-section')
 <!-- End Featured Services Section -->
@endsection
