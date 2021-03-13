<?php

namespace App\Providers;

use App\Models\Section;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        View::composer('includes.footer', function ($view) {
            $email = Section::where('name', 'email')->first();
            $address = Section::where('name', 'address')->first();
            $phone = Section::where('name', 'phone ')->first();
            $facebook = Section::where('name', 'facebook')->first();
            $instagram = Section::where('name', 'instagram')->first();

            $view->with([
                'email' => $email,
                'address' => $address,
                "phone" => $phone,
                'facebook'=>$facebook,
                'instagram'=>$instagram,
            ]);
        });
        View::composer('includes.navbar', function ($view) {
            $email = Section::where('name', 'email')->first();
            $phone = Section::where('name', 'phone')->first();
            $facebook = Section::where('name', 'facebook')->first();
            $instagram = Section::where('name', 'instagram')->first();


            $view->with([
                'email' => $email,
                "phone" => $phone,
                'facebook'=>$facebook,
                'instagram'=>$instagram,
            ]);
        });
        View::composer('includes.contact-section', function ($view) {
            $email = Section::where('name', 'email')->first();
            $phone = Section::where('name', 'phone ')->first();
            $address = Section::where('name', 'address')->first();

            $view->with([
                'email' => $email,
                "phone" => $phone,
                'address'=>$address,
            ]);
        });
        View::composer('includes.about-section', function ($view) {
            $about = Section::where('name', 'about')->first();

            $view->with([
                'about' => $about,

            ]);
        });
    }
}
