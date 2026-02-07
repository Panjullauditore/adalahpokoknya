<?php

use App\Http\Controllers\MenfessController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $menfesses = Auth::user()->menfesses;
    $receivedMenfesses = Auth::user()->receivedMenfesses;
    return Inertia::render('Dashboard', [
        'menfesses' => $menfesses,
        'receivedMenfesses' => $receivedMenfesses,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/send-message', [MenfessController::class, 'sendMessage'])->name('send.message');
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/admin/dashboard', [MenfessController::class, 'adminDashboard'])->name('admin.dashboard');
});

require __DIR__.'/auth.php';
