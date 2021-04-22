<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/products/add', 'App\Http\Controllers\ProductsController@loadCsv');
Route::get('/products', 'App\Http\Controllers\ProductsController@products');
Route::get('/product/{id}', 'App\Http\Controllers\ProductsController@productDetails');
Route::post('/products/search','App\Http\Controllers\ProductsController@productsSearch');