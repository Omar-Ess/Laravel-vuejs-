<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Section;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $header = Section::where('name', 'header')->first();
        $about = Section::where('name', 'about')->first();
        $latestProducts = Product::latest()->take(6)->get();

        return view('pages.index')->with([
            'header'=>$header,
            'about'=>$about,
            'latestProducts' => $latestProducts
        ]);
    }

    public function about()
    {
        return view('pages.about');
    }
}
