<?php

use App\Http\Controllers\API\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\EmailController;
use App\Http\Controllers\API\NotificationController;
use App\Http\Controllers\API\SectionController;

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


// Route::group(['middleware' => 'auth:api'], function () {

    //user routes
    Route::delete('/users/bulk/{ids}', [UserController::class, 'bulk_destroy']);
    Route::apiResource('users', UserController::class);

    //categories routes
    Route::get('/categories/generateSlug/{id}', [CategoryController::class, 'generateSlug']);
    Route::delete('/categories/bulk/{ids}', [CategoryController::class, 'bulk_destroy']);
    Route::apiResource('categories', CategoryController::class);

    //products routes
    Route::delete('/products/bulk/{ids}', [ProductController::class, 'bulk_destroy']);
    Route::apiResource('products', ProductController::class);

    // dashboard routes
    Route::get('/dashboard/count',  [DashboardController::class, 'count']);
    Route::get('/dashboard/charts',   [DashboardController::class, 'charts']);

    // sections routes
    Route::apiResource('sections', SectionController::class)->only(['index', 'update']);

    // auth user routes
    Route::get('/profile', [AuthController::class, 'index']);
    Route::put('/profile/updateProfileInfo', [AuthController::class, 'updateProfileInfo']);
    Route::put('/profile/updateProfilePassword', [AuthController::class, 'updateProfilePassword']);
    Route::put('/profile/updateProfileAvatar', [AuthController::class, 'updateProfileAvatar']);

    // notifications routes
    Route::get('notifications', [NotificationController::class, 'getNotifications']);
    Route::delete('notifications', [NotificationController::class, 'deleteNotifications']);
    Route::put('notifications', [NotificationController::class, 'markNotifications']);

    // emails routes
    Route::apiResource('emails', EmailController::class)->only(['index', 'show']);
// });
