<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use App\Http\Requests\UserStoreRequest;
use Illuminate\Support\Facades\Request;
use App\Http\Requests\UserUpdateRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users =  User::latest()->get();
        return response()->json([
            'users' => $users
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserStoreRequest $request)
    {
        abort_if(Gate::denies('manage-users'), 403, 'Forbidden');
        // file upload
        $fileNameToDB =  "/storage/images/users/noavatar.jpg";
        if ($request->hasFile('newAvatar')) {
            $fileNameToDB = User::uploadFile($request);
        }

        $user =  User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_admin' => $request->is_admin,
            'avatar' => $fileNameToDB
        ]);
        return response()->json([
            'message' => 'user created succefully',
            'user' => $user
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return response()->json([
            'user' => $user
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, User $user)
    {

        abort_if(Gate::denies('manage-users'), 403, 'Forbidden');
        // file upload
        if ($request->hasFile('newAvatar')) {
            if ($user->avatar != '/storage/images/users/noavatar.jpg') {
                $user->deleteOldAvatar();
            }
            $user->avatar = User::uploadFile($request);
        }


        $user->name = $request->name;
        $user->email = $request->email;
        $user->is_admin = $request->is_admin;
        $user->save();
        return response()->json([
            'message' => 'user updated succefully',
            'user' => $user

        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        abort_if(Gate::denies('manage-users'), 403, 'Forbidden');
        if ($user->avatar != '/storage/images/users/noavatar.jpg') {
            $user->deleteOldAvatar();
        }
        $user->delete();
        return response()->json([
            'message' => 'user deleted succefully'
        ], 200);
    }

    public function bulk_destroy($ids)
    {
        abort_if(Gate::denies('manage-users'), 403, 'Forbidden');
        $idsExploded = explode(',', $ids);
        foreach ($idsExploded as $id) {
            $user =  User::findOrFail($id);
            if ($user->avatar != '/storage/images/users/noavatar.jpg') {
                $user->deleteOldAvatar();
            }
            $user->delete();
        }
        return response()->json([
            'message' => "user(s) have been deleted",
        ], 200);
    }

}
