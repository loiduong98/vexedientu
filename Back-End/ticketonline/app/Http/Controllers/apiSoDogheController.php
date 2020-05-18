<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\sodoghe;

class apiSoDogheController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return sodoghe::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return sodoghe::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(sodoghe $sodoghe)
    {
        return $sodoghe;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, sodoghe $sodoghe)
    {
        $sodoghe->update($request->all());
        return $sodoghe;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(sodoghe $sodoghe)
    {
        $sodoghe->delete();
        return $sodoghe;
    }
}
