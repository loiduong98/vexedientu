<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\khachhang;
use App\ve;
use App\hoadon;
use App\lichchay;
use DB;

class apiGetTicketUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $all_ve = DB::table('ve')
            ->join('khachhang', 've.idKH', '=', 'khachhang.id')
            ->join('lichchay', 've.idLC', '=', 'lichchay.id')
            ->select('khachhang.*', 've.*', 'lichchay.*')
            ->get();

        return $all_ve;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Sử dụng id khách hàng để lọc vé
        $id_kh  = $id;

        $new    = json_decode((ve::where('idKH', $id)->get()),true);

        if(!empty($new)) {
            foreach ($new as $vl_new) {
                $new_array  = array();    
                $array_ticket = array();
                $id_lc  = $vl_new['idLC'];
                $lc     = (json_decode((lichchay::where('id', $id_lc)->get()),true))['0'];
                $array_ticket  = array_merge($lc,$vl_new);
                $all_ticket[] = array_merge($array_ticket,$new_array);
            }
            return $all_ticket;
        } else {
            return json_encode(['status'=>'fasle','message'=>'User chưa đặt vé.']);
        }

        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
