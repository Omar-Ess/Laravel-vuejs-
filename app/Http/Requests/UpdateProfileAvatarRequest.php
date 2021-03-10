<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileAvatarRequest extends FormRequest
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
            'newAvatar' => 'required|image|max:1999'
        ];


    }
    public function messages()
    {
        return [
            'newAvatar.required'=>"l'Avatar est requis",
            'newAvatar.image' => "l'Avatar doit être une image",
            'newAvatar.max'=> " la taille de l'avatar doit être inférieure à 2 MB"
        ];
    }
}
