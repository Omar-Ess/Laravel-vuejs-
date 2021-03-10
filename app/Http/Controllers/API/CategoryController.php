<?php

namespace App\Http\Controllers\API;

use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\CategoryStoreRequest;
use App\Http\Requests\CategoryUpdateRequest;
use Cviebrock\EloquentSluggable\Services\SlugService;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories =  Category::latest()->withCount('products')->get();
        return response()->json([
            'categories' => $categories
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryStoreRequest $request)
    {
        $category =  Category::create([
            'name' => $request->name,
            'slug' => $request->slug
        ]);
        return response()->json([
            'message' => 'category created succefully',
            'category' => $category
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {

        return response()->json([
            'category' => $category
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryUpdateRequest $request, Category $category)
    {
        $category->update([
            'name' => $request->name,
            'slug' => $request->slug
        ]);
        return response()->json([
            'message' => 'category updated succefully',
            'category' => $category

        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json([
            'message' => 'category deleted succefully'
        ], 200);
    }
    public function bulk_destroy($ids)
    {

        $idsExploded = explode(',', $ids);
        foreach ($idsExploded as $id) {
            $category =  Category::findOrFail($id);
            $category->delete();
        }
        return response()->json([
            'message' => "categorie(s) have been deleted",
        ], 200);
    }
    public function generateSlug($name)
    {
        $slug = SlugService::createSlug(Category::class, 'slug', $name);
        return response()->json(['slug' => $slug], 200);
    }
}
