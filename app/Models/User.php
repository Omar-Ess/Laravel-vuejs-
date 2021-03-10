<?php

namespace App\Models;

use Illuminate\Support\Str;


use Laravel\Passport\HasApiTokens;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use  HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'is_admin',
        'avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function deleteOldAvatar()
    {
        $userAvatarName = explode('/storage/images/users/', $this->avatar);
        // hadi dratni f rassi khasni n39el elach dertha
        if (count($userAvatarName) > 1) {
            $userAvatarPath =  "/public/images/users/" . $userAvatarName[1];
            Storage::delete($userAvatarPath);
        }
    }
    public static function uploadFile($request)
    {
        global $fileNameToDB;

        $fileNameWithExt = $request->file('newAvatar')->getClientOriginalName();
        $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
        $extension = $request->file('newAvatar')->getClientOriginalExtension();
        $fileNameToStore = $filename . '_' . time() . Str::random(10) . '.' . $extension;
        $fileNameToDB = '/storage/images/users/' . $fileNameToStore;
        $request->file('newAvatar')->storeAs('public/images/users/', $fileNameToStore);
        Image::make(public_path('storage/images/users/' . $fileNameToStore))->fit(225, 225)->save();

        return $fileNameToDB;
    }
}
