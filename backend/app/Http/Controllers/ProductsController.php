<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;

class ProductsController extends Controller
{
    public function loadCsv(Request $request) {
        $csv = $request->file('csv');

        $header = null;
        $data = array();
        if (($handle = fopen($csv, 'r')) !== false)
        {
            while (($row = fgetcsv($handle, 1000, ',')) !== false)
            {
                if (!$header)
                    $header = $row;
                else
                    $data[] = array_combine($header, $row);
            }
            fclose($handle);
        }
    

        foreach($data as $item) {
            $product = new Products;
            $product->product_name = $item["product_name"];
            $product->description = $item["description"];
            $product->image = $item["image"];
            $product->price = $item["price"];
            $product->save();
        }

        return $data;

    }
}
