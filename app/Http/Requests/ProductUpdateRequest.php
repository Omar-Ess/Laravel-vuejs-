<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'=>'nullable|string',
            'desc'=>'nullable|string',
            'category_id' => 'required',
            'newImage' => 'nullable|image|max:1999'
        ];
    }

    public function messages()
    {
        return [
            'category_id.required' => "la categorie est requis",
            'newImage.image' => "l'Image doit être une image",
            'newImage.max'=> " la taille de l'image doit être inférieure à 2 MB"
        ];
    }
}
