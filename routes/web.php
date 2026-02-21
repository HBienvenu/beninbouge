<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return to_route('home');
});

Route::get('/accueil', [HomeController::class, 'index'])->name('home');
