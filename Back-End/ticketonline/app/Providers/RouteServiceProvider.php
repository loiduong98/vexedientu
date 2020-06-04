<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
             ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::group([
            'middleware' => ['api', 'cors'],
            'namespace' => $this->namespace,
            'prefix' => 'api',
        ], function ($router) {
             //Add you routes here, for example:
                Route::apiResource('khachhang', 'apiKhachHangController');

                Route::apiResource('ben', 'apiBenController');
                
                Route::apiResource('tuyen', 'apiTuyenController');
                
                Route::apiResource('chucvu', 'apiChucVuController');
                
                Route::apiResource('sodoghe', 'apiSoDoGheController');
                
                Route::apiResource('chitietghe', 'apiChiTietGheController');
                
                Route::apiResource('xe', 'apiXeController');
                
                Route::apiResource('nhanvien', 'apiNhanVienController');
                
                Route::apiResource('users', 'apiUsersController');

                Route::apiResource('login', 'apiLoginController');
                
                Route::apiResource('ve', 'apiVeController');      

                Route::apiResource('lichchay', 'apiLichChayController');

                Route::apiResource('checkout', 'DatVeController');  

                Route::apiResource('bookticket', 'apiBookticketController');

                Route::apiResource('tradeticket','apiTradeticketController');

                Route::apiResource('news', 'apiBangTinController');
        });
    }
}
