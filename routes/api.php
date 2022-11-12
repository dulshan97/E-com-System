<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/product', 'ProductController@create');
Route::get('/products', 'ProductController@getProductList');
Route::get('/product/{id}', 'ProductController@getProductDetails');
Route::put('/product/{id}', 'ProductController@updateProductDetails');
Route::delete('/product/{id}', 'ProductController@deleteProduct');