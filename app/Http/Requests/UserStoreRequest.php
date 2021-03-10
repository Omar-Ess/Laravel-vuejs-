<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'is_admin' => 'required|boolean',
            'newAvatar' => 'nullable|image|max:1999'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Le nom est requis',
            'email.required' => "l'email est requis",
            'email.email' => "l'email doit être valide",
            'email.unique' => "l'email doit être unique",
            'password.required' => "Le mot de passe est requis",
            'password.min' => "le mot de passe doit contenir plus de 8 lettres",
            'is_admin.required' => "le rôle doit être donné",
            'is_admin.boolean' => "le rôle doit être boolean",
            'newAvatar.image' => "l'Avatar doit être une image",
            'newAvatar.max'=> " la taille de l'avatar doit être inférieure à 2 MB"

        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'is_admin' => filter_var($this->is_admin, FILTER_VALIDATE_BOOLEAN),
        ]);
    }
}
