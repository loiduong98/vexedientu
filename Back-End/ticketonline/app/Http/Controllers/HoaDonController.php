<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\hoadon;
use App\khachhang;

class HoaDonController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }
    
    public function getDanhSach()
    {
        $hoadon = hoadon::orderBy('id','DESC')->get();
    	return view('admin.hoadon.danhsach', ['hoadon'=>$hoadon]);
    	
    }
    public function getChiTiet($id)
    {
        return view('admin.hoadon.chitiet', ['ct_hoadon'=>$ct_hoadon]);        
    }
}
