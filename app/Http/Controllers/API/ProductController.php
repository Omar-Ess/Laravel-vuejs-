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
        $products =  Product::orderBy('id' , 'desk')->with('category')->get();
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
        // dd($request->desc);
        // file upload

        $fileNameToDB = $this->uploadFile($request);


        $product = new Product();
        $product->title = $request->title == null ? '' : $request->title;
        $product->desc = $request->desc == null ? '' : $request->desc;
        $product->category_id = $request->category_id;
        $product->image = $fileNameToDB;
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
            $product->deleteOldImage();
            $product->image = $this->uploadFile($request);
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
        if ($product->image != '/storage/images/products/noimage.jpg') {
            $product->deleteOldImage();
        }
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
            if ($product->image != '/storage/images/products/noimage.jpg') {
                $product->deleteOldImage();
            }
            $product->delete();
        }
        return response()->json([
            'message' => "product(s) have been deleted",
        ], 200);
    }
    private function uploadFile($request)
    {
        global $fileNameToDB;


        $fileNameWithExt = $request->file('newImage')->getClientOriginalName();
        $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
        $extension = $request->file('newImage')->getClientOriginalExtension();
        $fileNameToStore = $filename . '_' . time() . Str::random(10) . '.' . $extension;
        $fileNameToDB = '/storage/images/products/' . $fileNameToStore;
        $request->file('newImage')->storeAs('public/images/products/', $fileNameToStore);
        Image::make(public_path('storage/images/products/' . $fileNameToStore))->fit(800, 600)->save();

        return $fileNameToDB;
    }
}
