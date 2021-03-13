<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(['email' => 'admin@gmail.com', 'password' => Hash::make('password'), 'name' => 'Admin', 'is_admin' => 1 , 'avatar'=> '/storage/images/users/noavatar.jpg']);
    }
}
