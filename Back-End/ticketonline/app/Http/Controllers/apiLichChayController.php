<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\lichchay;

class apiLichChayController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return lichchay::all();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return lichchay::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(lichchay $lichchay)
    {
        return $lichchay;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, lichchay $lichchay)
    {
        $lichchay->update($request->all());
        return $lichchay;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(lichchay $lichchay)
    {
        $lichchay->delete();
        return $lichchay;
    }
}
