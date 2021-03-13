<?php

namespace App\Http\Controllers\API;

use App\Models\Product;
use Illuminate\Support\Str;


use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products =  Product::orderBy('id', 'desc')->with('category')->get();
        return response()->json([
            'products' => $products
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductStoreRequest $request)
    {



        $product = new Product();
        $product->title = $request->title == null ? '' : $request->title;
        $product->desc = $request->desc == null ? '' : $request->desc;
        $product->category_id = $request->category_id;
        $product->save();
        // file upload
        $fileNameToDB = $this->uploadFile($request, $product->id);
        $product->image = $fileNameToDB[0];
        $product->resizedImage = $fileNameToDB[1];
        $product->save();
        return response()->json([
            'message' => 'product created succefully',
            'product' => $product
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json([
            'product' => $product
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProductUpdateRequest $request, Product $product)
    {
        // file upload
        if ($request->hasFile('newImage')) {
            $product->deleteOldImages();
            $fileNameToDB = $this->uploadFile($request, $product->id);
            $product->image = $fileNameToDB[0];
            $product->resizedImage = $fileNameToDB[1];
        }

        $product->title = $request->title == null ? '' : $request->title;
        $product->desc = $request->desc == null ? '' : $request->desc;
        $product->category_id = $request->category_id;
        $product->save();
        return response()->json([
            'message' => 'product updated succefully',
            'product' => $product

        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {

        $product->deleteOldImages();
        $product->delete();
        return response()->json([
            'message' => 'product deleted succefully'
        ], 200);
    }
    public function bulk_destroy($ids)
    {
        $idsExploded = explode(',', $ids);
        foreach ($idsExploded as $id) {
            $product =  Product::findOrFail($id);
            $product->deleteOldImages();
            $product->delete();
        }
        return response()->json([
            'message' => "product(s) have been deleted",
        ], 200);
    }
    private function uploadFile($request, $productId)
    {
        $fileNameWithExt = $request->file('newImage')->getClientOriginalName();
        $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
        $extension = $request->file('newImage')->getClientOriginalExtension();

        // normal size upload
        $fileNameToStore = $filename . '_' . time() . Str::random(10) . '.' . $extension;
        $request->file('newImage')->storeAs('public/images/products/' . $productId, $fileNameToStore);
        // resized upload
        $fileNameToStoreResized = $filename . '_resized_' . time() . Str::random(10) . '.' . $extension;
        $request->file('newImage')->storeAs('public/images/products/' . $productId, $fileNameToStoreResized);
        Image::make(public_path('storage/images/products/' . $productId . '/' . $fileNameToStoreResized))->fit(800, 600)->save();

        // save normal and resized in database
        $fileNameToDB = '/storage/images/products/' . $productId . '/' . $fileNameToStore;
        $fileNameToDBResized = '/storage/images/products/' . $productId . '/' . $fileNameToStoreResized;
        return [$fileNameToDB, $fileNameToDBResized];
    }
}
