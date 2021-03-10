<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Notifications\ContactNotification;
use Illuminate\Support\Facades\Notification;

class ContactController extends Controller
{
    public function index()
    {
        return view('pages.contact');
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'subject' => 'required',
            'message' => 'required'
        ]);
        $admins = User::where('is_admin', true)->get();
        $sender = (object)[
            'name' => $request->name,
            'email' => $request->email,

        ];
        Notification::send($admins, new ContactNotification($request->subject, $request->message, $sender));
        return redirect()->route('contact.index')->with('success_message', 'merci de nous avoir contacté, nous vous répondrons dans les plus brefs délais');
    }
}
