<?php

use App\Http\Controllers\EventController;
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
Route::get('/', function () {
    return Inertia::render('login/LoginApp');
});
Route::get('/registerp', function () {
    return Inertia::render('registration/RegApp');
});




Route::get( '/aevent', [EventController::class,'aevent']);





Route::get('/main', [EventController::class,'show']);





Route::post('/downloading', [EventController::class,'store']);
Route::get('/delete/{eid}', [EventController::class,'delete']);


Route::get('/contacts', function () {
    return Inertia::render('CMSContacts');
});
Route::get('/workers', function () {
    return Inertia::render('CMSWorkers');
});

Route::get('/uep', function () {
    return Inertia::render('UserEventPage');
});

Route::get('/cms-cabinet/planner', [EventController::class,'show']);
Route::get('/cms-cabinet/create-event', function () {
    return Inertia::render('modules/cmsPlanner/createActionEvent/CreateActionEvent');
});


Route::post('/sendntg', function () {
    return Inertia::render('sendntg');
});


Route::get('/80yo', function () {
   // return Inertia::render('UserEventPage');
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
