<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/loginp', function () {
    return Inertia::render('login/LoginApp');
});
Route::get('/registerp', function () {
    return Inertia::render('registration/RegApp');
});










Route::get('/', function () {
    return Inertia::render('CMS/CMShome');//main page
});



Route::get('/cms-cabinet/planner', function () {
    return Inertia::render('modules/cmsPlanner/CMSPlanner');
});
Route::get('/cms-cabinet/create-event', function () {
    return Inertia::render('modules/cmsPlanner/createActionEvent/CreateActionEvent');
});
































Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::get('/react', function () {
    return view('react');
});


require __DIR__.'/auth.php';
