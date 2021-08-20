@extends('layouts.app')
@section('title')
À Propos de nous -
@endsection
@section('description')
nous sommes une entreprise de fabrication spécialisée dans les sacs et vêtements
@endsection
@section('canonical')
https://tousalik.com/about
@endsection


@section('content')
    @include('includes.breadcrumb' , ['page'=>'propos'])
        <!-- ======= About Section ======= -->
        @include('includes.about-section')       <!-- End About Section -->


    <!-- ======= Featured Services Section ======= -->
    @include('includes.services-section')
 <!-- End Featured Services Section -->
@endsection
