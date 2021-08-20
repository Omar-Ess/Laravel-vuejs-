@extends('layouts.app')
@section('title')
Nos Produits -
@endsection
@section('description')
Nous proposons toutes sortes de vêtements de sport ainsi que des sacs de luxe et des articles traditionnels. avec un
Meilleur Cuir Fabriqué en Turquie
@endsection
@section('canonical')
https://tousalik.com/gallery
@endsection

@section('content')
@include('includes.breadcrumb' , ['page'=>'Galerie' ])
<gallery-list :products="{{$products}}" :categories="{{$categories}}"></gallery-list>
@endsection
