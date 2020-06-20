<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// use App\khachhang_login;
use App\ve;
use App\bang_tin;

class apiTradeticketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return ve::all();
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
        return ve::where('idKH', $id)->get();
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
     * ĐỒNG Ý TRAO ĐỔI VÉ
     *
     * @param  int  $id id của vé
     */
    public function update($id)
    {
        $id_bt          = (bang_tin::where('idVe', $id)->where('TrangThai_new', 1)->first())->id_new;
        $idKH_trade     = (bang_tin::where('idVe', $id)->where('TrangThai_new', 1)->first())->idKH_trade;

        $ve_array       = array(
            'idKH'           => $idKH_trade,  
            'TrangThai'      => 0
        );

        $trade = ve::where('id', $id)->update($ve_array);
        if($trade == 1) {
            $update_ve  = bang_tin::where('id_new', $id_bt)->update(array('TrangThai_new' => 3));
            return json_encode(['status'=>'true','message'=>'Trao đổi vé thành công']);
        }else{
            return json_encode(['status'=>'false','message'=>'Trao đổi vé thất bại']);
        }
    }

    /**
     * HỦY XÁC NHẬN (TỪ CHỐI TRAO ĐỔI VÉ)
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $idKH_old     = (bang_tin::where('idVe', $id)->where('TrangThai_new', 1)->first())->idKH_old;
        $id_news      = (bang_tin::where('idVe', $id)->where('TrangThai_new', 1)->where('idKH_old', $idKH_old)->first())->id_new;

        if(isset($id) && isset($id_news)) {
            $update_ve      = ve::where('id', $id)->update(array('TrangThai' => 0));
            $update_news    = bang_tin::where('id_new', $id_news)->update(array('TrangThai_new' => 0, 'idKH_trade' => NULL));
            if(($update_news !== 1) && ($update_ve !== 1)) {
                return json_encode(['status'=>'fasle','message'=>'Từ chối trao đổi vé không thành công.']);
            }else{
                return json_encode(['status'=>'true','message'=>'Đã từ chối trao đổi vé.']);
            }
        }else{
            return json_encode(['status'=>'fasle','message'=>'Từ chối trao đổi vé không thành công.']);
        }
    }
}