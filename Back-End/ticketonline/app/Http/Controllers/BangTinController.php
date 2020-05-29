<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\bang_tin;

class BangTinController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }
    
    public function getDanhSach()
    {
    	$bang_tin = bang_tin::orderBy('id','DESC')->get();
    	return view('admin.bang_tin.danhsach', ['bang_tin'=>$bang_tin]);
    }

    public function getThem()
    {
        $bang_tin = bang_tin::all();
    	return view('admin.bang_tin.them',['bang_tin'=>$bang_tin]);
    }

    public function postThem(Request $request)
    {
        $this->validate($request,
            [
                'TieuDe'=>'required|min:3|max:100|unique:bang_tin',
                'NoiDung'=>'required|min:3:bang_tin',
                'urlHinh'=>'required'
            ],
            [
                'NoiDung.required'=>'Bạn chưa nhập nội dung',
                'urlHinh.required'=>'Bạn chưa chọn hình',
                'TieuDe.required'=>'Bạn chưa nhập username',
                'TieuDe.min'=>'Username quá ngắn',
                'TieuDe.max'=>'Username quá dài'
            ]);
        $bang_tin = new bang_tin;
        $bang_tin->TieuDe = $request->TieuDe;
        $bang_tin->NoiDung = $request->NoiDung;
        if($request->hasFile('urlHinh'))
        {
            $file = $request->file('urlHinh');  

            $name = $file->getClientOriginalName();
            $urlHinh = str_random(4)."_".$name;
            while(file_exists("upload/bang_tin/".$urlHinh))
            {
                $urlHinh = str_random(4)."_".$name;
            }
            $file->move("upload/bang_tin",$urlHinh);
            $bang_tin->urlHinh = $urlHinh;
        }
        else
        {
            $bang_tin->urlHinh = "";
        }
        $bang_tin->NoiBan = $request->NoiBan;
        $bang_tin->Gia = $request->Gia;
        $bang_tin->save();
        return redirect('admin/bang_tin/them')->with('thongbao','Thêm thành công');
    }


    public function getSua($id)
    {
        $bang_tin = bang_tin::find($id);
        return view('admin.bang_tin.sua', ['bang_tin'=>$bang_tin]);
    }

    public function postSua(Request $request,$id)
    {
        $bang_tin = bang_tin::find($id);
        $this->validate($request,
            [
                'TieuDe'=>'required|min:3|max:100:bang_tin',
                'NoiDung'=>'required|min:3:bang_tin',
            ],
            [
                'NoiDung.required'=>'Bạn chưa nhập nội dung',
                'TieuDe.min'=>'Username quá ngắn',
                'TieuDe.max'=>'Username quá dài'
            ]);
        $bang_tin = new bang_tin;
        $bang_tin->TieuDe = $request->TieuDe;
        $bang_tin->NoiDung = $request->NoiDung;
        if($request->hasFile('urlHinh'))
        {
            $file = $request->file('urlHinh');  

            $name = $file->getClientOriginalName();
            $urlHinh = str_random(4)."_".$name;
            while(file_exists("upload/bang_tin/".$urlHinh))
            {
                $urlHinh = str_random(4)."_".$name;
            }
            $file->move("upload/bang_tin",$urlHinh);
            $bang_tin->urlHinh = $urlHinh;
        }
        else
        {
            $bang_tin->urlHinh = "";
        }
        $bang_tin->NoiBan = $request->NoiBan;
        $bang_tin->Gia = $request->Gia;
        $bang_tin->save();
        return redirect('admin/bang_tin/sua/'.$id)->with('thongbao','Sửa thành công');
    }
}
