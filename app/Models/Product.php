<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'title', 'desc ', 'image', 'category_id'
    ];

    public function category()
    {
        return  $this->belongsTo('App\Models\Category');
    }
    public function deleteOldImage()
    {
        $productImageName = explode('/storage/images/products/', $this->image);
        // hadi dratni f rassi khasni n39el elach dertha
        if (count($productImageName) > 1) {
            $productImagePath =  "/public/images/products/" . $productImageName[1];
            Storage::delete($productImagePath);
        }
    }
}
