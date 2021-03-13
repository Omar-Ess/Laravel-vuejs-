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
        return  $this->belongsTo('App\Models\Category')->withDefault([
            'name' => 'Inconnue'
        ]);
    }
    public function deleteOldImages()
    {
        $path =  "/public/images/products/" . $this->id;
        Storage::deleteDirectory($path);
    }
}
