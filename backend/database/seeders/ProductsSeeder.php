<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
use Str;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++)
        DB::table('products')->insert([
            'product_name' => "Database Product ".$i,
            'description' => "Dolor Sit Amet ".$i,
            'image' => 'http://via.placeholder.com/100x100',
            'price' => rand (1000, 5999),
            'created_at' => \Carbon\Carbon::now(),
            'updated_at' => \Carbon\Carbon::now(),
        ]);
    }
}
