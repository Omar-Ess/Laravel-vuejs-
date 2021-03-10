@extends('layouts.app')

@section('title')
 | Gallery
@endsection
@section('content')
    @include('includes.breadcrumb' , ['page'=>'Galerie' ])
<gallery-list :products="{{$products}}" :categories="{{$categories}}"></gallery-list>
@endsection
