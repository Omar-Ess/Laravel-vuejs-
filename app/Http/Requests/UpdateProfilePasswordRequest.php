<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfilePasswordRequest extends FormRequest
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
            'current_password'     => 'required',
            'new_password'     => 'required|min:8',
            'new_password_confirm' => 'required|same:new_password',
        ];
    }
    public function messages()
    {
        return [
            'current_password.required' => 'Le mot de passe actuel est requis',
            'new_password.required' => "Le nouveau mot de passe  est requis",
            'new_password.min' => "Le nouveau mot de passe doit contenir plus de 8 lettres",
            'new_password_confirm.required' => "La confirmation est requis",
            'new_password_confirm.same' => "Les mots de passe doivent correspondre",
        ];
    }
}
