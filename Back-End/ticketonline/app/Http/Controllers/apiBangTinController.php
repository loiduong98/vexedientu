<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\bang_tin;

class apiBangTinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return bang_tin::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return bang_tin::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(bang_tin $bang_tin)
    {
        return $bang_tin;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, bang_tin $bang_tin)
    {
        $bang_tin->update($request->all());
        return $bang_tin;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(bang_tin $bang_tin)
    {
        $bang_tin->delete();
        return $bang_tin;
    }
}