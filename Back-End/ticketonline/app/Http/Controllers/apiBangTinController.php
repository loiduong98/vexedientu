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
        $id_ve = $request->idVe;
        $title = $request->TieuDe;
        $price = $request->Gia;

        if(isset($id_ve)) {           
            if($title !== null && $price !== null) {
                $create_new = bang_tin::create($request->all());

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
    public function destroy($id)
    {
        $new    = bang_tin::where('id', $id)->first();

        $id_ve  = $new->idVe;

        if(isset($id_ve)) {
            $update_ve  = ve::where('id', $id_ve)->update(array('TrangThai' => 1));
            if($update_ve !== 1) {
                return json_encode(['status'=>'fasle','message'=>'Vé đang được trao đổi.']);
            }
        }
        dd($new);
        DB::table('users')->where('id', $id)->delete();
        $bang_tin->delete();
        return $bang_tin;
    }
}