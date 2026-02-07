<?php

namespace App\Http\Controllers;

use App\Models\Menfess;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class MenfessController extends Controller
{
    public function sendMessage(Request $request)
    {
        $request->merge(['recipient_username' => trim($request->recipient_username)]);

        $request->validate([
            'recipient_username' => ['required', 'string', 'exists:users,username'],
            'message' => ['required', 'string', 'max:1000'],
        ]);

        // Check if recipient is not the sender
        $recipient = User::where('username', $request->recipient_username)->first();
        if ($recipient->id === Auth::id()) {
            return back()->withErrors(['recipient_username' => 'You cannot send a message to yourself.']);
        }

        Menfess::create([
            'sender_id' => Auth::id(),
            'recipient_username' => $request->recipient_username,
            'message' => $request->message,
            'status' => 'sent',
        ]);

        return back()->with('success', 'Message sent successfully!');
    }

    public function adminDashboard()
    {
        $menfesses = Menfess::with('sender')->get();

        return Inertia::render('Admin/Dashboard', [
            'menfesses' => $menfesses,
        ]);
    }
}
