<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('id' , 'desc')->get();
        $categories = Category::orderBy('id' , 'desc')->get();

        return view('pages.gallery.index')->with([
            'products'=> $products,
            'categories' => $categories
        ]);
    }
}
