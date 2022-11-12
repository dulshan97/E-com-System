<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Product;


class ProductController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function create(Request $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'quantity' => $request->quantity
        ]);
        
        return response()->json([
            'status' => 'success',
            'message' => 'Product is saved successfully',
            'data' => $product
        ]);
    }

    public function getProductList(Request $request)
    {
        $products = Product::all();

        return response()->json($products);
    }

    public function updateProductDetails(Request $request, $id)
    {
        $product = Product::find($id);
        $product->name = $request->name;
        $product->price = $request->price;
        $product->quantity = $request->quantity;
        $product->save();


        return response()->json([
            'status' => 'success',
            'message' => 'Product is updated successfully',
            'data' => $product
        ]);
    }
    
}
