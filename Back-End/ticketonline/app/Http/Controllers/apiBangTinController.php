<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\bang_tin;
use App\ve;
use DB;

class apiBangTinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $all_bangtin = DB::table('ve')
            ->join('bang_tin', 've.id', '=', 'bang_tin.idVe')
            ->join('khachhang', 've.idKH', '=', 'khachhang.id')
            ->select('bang_tin.*', 've.*', 'khachhang.*')
            ->get();

        return $all_bangtin;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $id_ve      = $request->idVe;
        $title      = $request->TieuDe;
        $price      = $request->Gia;
        $idKH_old   = (ve::where('id', $id_ve)->first())->idKH;
        
        $all_rq   = [
            'idVe'          => $request->idVe,
            'TieuDe'        => $request->TieuDe,
            'Gia'           => $request->Gia,
            'TrangThai_new' => 0,
            'idKH_old'      => $idKH_old
        ];

        if(isset($id_ve)) {           
            if($title !== null && $price !== null) {
                $create_new = bang_tin::create($all_rq);

                $update_ve  = ve::where('id', $id_ve)->update(array('TrangThai' => 1));
                if($update_ve !== 1) {
                    return json_encode(['status'=>'fasle','message'=>'Vé đang được trao đổi.']);
                }

                return json_encode(['status'=>'true','message'=>'Đăng bài trao đổi vé thành công.']);
            } else {
                return json_encode(['status'=>'fasle','message'=>'Không lấy được đầy đủ dữ liệu vé']);    
            }
        } else {
            return json_encode(['status'=>'fasle','message'=>'Không lấy được id vé']);
        }
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
     * YÊU CẦU TRAO ĐỔI VÉ
     *
     * @param  int  $idKH_trade GIÁ TRỊ ID CỦA USER MUỐN TRAO ĐỔI VÉ
     * @param  int  $id GIÁ TRỊ ID THỨ TỰ VÉ TRONG BẢNG TIN 
     */
    public function update(Request $request, $id)
    {
        $ve_array       = array(
            'TrangThai_new'   => 1,
            'idKH_trade'      => $request->idKH_trade,  
        );

        $all_bangtin = bang_tin::all();

        foreach ($all_bangtin as $vl_bt) {
            $all_id[] = $vl_bt->id_new;
        }

        if(in_array($id, $all_id)){
            $trade      = bang_tin::where('id_new', $id)->update($ve_array);
        
            if($trade == 1) {
                $id_ve      = (bang_tin::where('id_new', $id)->first())->idVe;
                $update_ve  = ve::where('id', $id_ve)->update(array('TrangThai' => 2));
                return json_encode(['status'=>'true','message'=>'Yêu cầu đổi vé thành công.']);
            }else{
                return json_encode(['status'=>'false','message'=>'Yêu cầu đổi vé thất bại.']);
            }
        }else{
            return json_encode(['status'=>'false','message'=>'ID bài viết không tồn tại.']);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id của vé
     */
    public function destroy($id)
    {
        $idKH_old     = (bang_tin::where('idVe', $id)->where('TrangThai_new', 0)->where('idKH_trade', null)->first())->idKH_old;
        $id_news        = (bang_tin::where('idVe', $id)->where('TrangThai_new', 0)->where('idKH_old', $idKH_old)->first())->id_new;

        if(isset($id) && isset($id_news)) {
            $update_ve      = ve::where('id', $id)->update(array('TrangThai' => 0));
            $update_news    = bang_tin::where('id_new', $id_news)->update(array('TrangThai_new' => 2));
            if(($update_news !== 1) && ($update_ve !== 1)) {
                return json_encode(['status'=>'fasle','message'=>'Hủy trao đổi vé không thành công.']);
            }else{
                return json_encode(['status'=>'true','message'=>'Đã hủy trao đổi vé.']);
            }
        }else{
            return json_encode(['status'=>'fasle','message'=>'Hủy trao đổi vé không thành công.']);
        }
    }
}