<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\nhanvien;

class apiNhanVienController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return nhanvien::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return nhanvien::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(nhanvien $nhanvien)
    {
        return $nhanvien;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, nhanvien $nhanvien)
    {
        $nhanvien->update($request->all());
        return $nhanvien;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(nhanvien $nhanvien)
    {
        $nhanvien->delete();
        return $nhanvien;
    }
}
