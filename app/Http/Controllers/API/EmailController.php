<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $emails = auth()->user()->notifications;
        return response()->json([
            'emails' => $emails
        ], 200);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        foreach (auth()->user()->notifications as $notification) {
            if ($notification->id === $id) {
                return response()->json([
                    'email' => $notification
                ], 200);
                break;
            }
        }
        abort(404);
    }
}
