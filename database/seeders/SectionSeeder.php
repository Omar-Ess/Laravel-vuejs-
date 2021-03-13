<?php

namespace Database\Seeders;

use App\Models\Section;
use Illuminate\Database\Seeder;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Section::create(['name' => 'header', 'content' => 'Sacs et Vêtement faites pour vous']);
        Section::create(['name' => 'about', 'content' => 'blabla']);
        Section::create(['name' => 'phone', 'content' => '+212 6 27 32 99']);
        Section::create(['name' => 'email', 'content' => 'tousalik@gmail.com']);
        Section::create(['name' => 'address', 'content' => '26 Av Mers Sultan. Etg 1 Appt 3 Casablanca']);
        Section::create(['name' => 'instagram', 'content' => 'https://www.instagram.com/gouhmadi_hassan/']);
        Section::create(['name' => 'facebook', 'content' => 'https://www.facebook.com/hassan.kehmadi']);

    }
}
