<?php

use Illuminate\Support\Facades\Route;


// this to overcome the 404 when we do a hard refresh cause for laravel the routes defin in resouces/js/router.js is not known
Route::get('/{vue_capture?}', function () {
    return view('welcome');
})->where('vue_capture', '[\/\w\.-]*');
