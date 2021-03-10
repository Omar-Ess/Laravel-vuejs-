<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Models\Product;
use App\Models\Section;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function count()
    {
        $usersCount = User::count();
        $categoriesCount = Category::count();
        $productsCount = Product::count();
        $sectionsCount = Section::count();
        return response()->json([
            'usersCount' => $usersCount,
            'categoriesCount' => $categoriesCount,
            'productsCount' => $productsCount,
            'sectionsCount' => $sectionsCount,
        ]);
    }
    public function charts()
    {

        DB::statement(DB::raw("SET lc_time_names = 'fr_FR'"));
        $productsByMonth = DB::table('products')->selectRaw("
        count(id) AS total,
        DATE_FORMAT(created_at, '%m' ) AS month,
        MONTHNAME(created_at) AS month

    ")
            ->groupBy('month')
            ->get();


        return response()->json([
            'productsByMonth' => $productsByMonth,
        ]);
    }
}
