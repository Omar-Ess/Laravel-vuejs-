<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NotificationController extends Controller
{

    public function getNotifications()
    {
        $user = User::find(auth()->id());
        return response()->json([
            'notifications' => $user->notifications()->latest()->take(4)->get()
        ]);
    }

    public function deleteNotifications()
    {
        $user = User::find(auth()->id());
        $user->notifications()->delete();
        return response()->json([
            'message' => 'notification(s) deleted successfully'
        ]);
    }
    public function markNotifications()
    {
        $user = User::find(auth()->id());
        $user->unreadNotifications->markAsRead();
        return response()->json([
            'message' => 'notification(s) updated successfully'
        ]);
    }
}
