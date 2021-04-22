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

    public function products() {
        return Products::all();
    }

    public function productDetails($id) {
        $product = Products::where('id', $id)->first();
        return $product;
    }

    public function productsSearch(Request $request) {
        $search = $request->input('search');

        $products = Products::query()
        ->where('product_name', 'LIKE', "%{$search}%")
        ->orWhere('description', 'LIKE', "%{$search}%")
        ->get();

        return $products;
    }
}
