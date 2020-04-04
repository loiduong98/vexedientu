<?php

use Illuminate\Http\Request;



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

Route::apiResource('khachhang', 'apiKhachHangController');

Route::apiResource('ben', 'apiBenController');

Route::apiResource('tuyen', 'apiTuyenController');

Route::apiResource('chucvu', 'apiChucVuController');

Route::apiResource('sodoghe', 'apiSoDoGheController');

Route::apiResource('chitietghe', 'apiChiTietGheController');

Route::apiResource('xe', 'apiXeController');

Route::apiResource('nhanvien', 'apiNhanVienController');

Route::apiResource('users', 'apiUsersController');

