<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateProfileAvatarRequest;
use App\Http\Requests\UpdateProfileInfoRequest;
use App\Http\Requests\UpdateProfilePasswordRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    public function index()
    {
        return response()->json([
            'authUser' => auth()->user()
        ]);
    }

    public function updateProfileInfo(UpdateProfileInfoRequest $request)
    {

        $authUser = User::find(auth()->id());
        $authUser->name  = $request->name;
        $authUser->email  = $request->email;
        $authUser->save();

        return response()->json([
            'message' => 'auth user info updated successfully',
            'authUser' => $authUser,
        ], 200);
    }
    public function updateProfilePassword(UpdateProfilePasswordRequest $request)
    {
        $current_password = auth()->user()->password;

        if (!Hash::check(request()->current_password, $current_password)) {
            throw ValidationException::withMessages(['mot de passe actuel incorrect']);
        }

        $authUser = User::find(auth()->id());
        $authUser->password = Hash::make($request->new_password);
        $authUser->save();
        return response()->json([
            'message' => 'auth user password updated successfully',
            'authUser' => $authUser,
        ], 200);
    }
    public function updateProfileAvatar(UpdateProfileAvatarRequest $request)
    {
        $authUser = User::find(auth()->id());
        // file upload
        if ($request->hasFile('newAvatar')) {
            if ($authUser->avatar != '/storage/images/users/noavatar.jpg') {
                $authUser->deleteOldAvatar();
            }
            $authUser->avatar = User::uploadFile($request);
            $authUser->save();
            return response()->json([
                'message' => 'auth user avatar updated successfully',
                'authUser' => $authUser,
            ], 200);
        }
    }
}
