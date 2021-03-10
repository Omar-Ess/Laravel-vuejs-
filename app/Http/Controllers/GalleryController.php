<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
    public function index()
    {
        $products = Product::latest()->get();
        $categories = Category::latest()->get();

        return view('pages.gallery.index')->with([
            'products'=> $products,
            'categories' => $categories
        ]);
    }
}
