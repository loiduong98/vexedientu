<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\chitietghe;

class apiChiTietGheController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return chitietghe::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return chitietghe::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(chitietghe $chitietghe)
    {
        return $chitietghe;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, chitietghe $chitietghe)
    {
        $chitietghe->update($request->all());
        return $chitietghe;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(chitietghe $chitietghe)
    {
        $chitietghe->delete();
        return $chitietghe;
    }
}
