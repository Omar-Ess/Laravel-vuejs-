@extends('layouts.app')
@section('title')
Contact -
@endsection
@section('description')
n'hésitez pas à nous contacter en utilisant les informations ci-dessous ou envoyez-nous un e-mail rapide dans le
formulaire
@endsection
@section('canonical')
https://tousalik.com/contact
@endsection


@section('content')
{{-- <div id="preloader"></div> --}}

@include('includes.breadcrumb' , ['page'=>'contact'])
<!-- ======= Contact Section ======= -->
@include('includes.contact-section')
<!-- End Contact Section -->
@endsection
