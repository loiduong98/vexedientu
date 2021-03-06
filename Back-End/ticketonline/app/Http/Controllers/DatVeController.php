<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Session;
use App\tuyen;
use App\lichchay;
use App\khachhang;
use App\chitietghe;
use App\chitietve;
use App\hinhthucthanhtoan;
use App\ben;
use App\sodoghe;
use App\ve;
use App\hoadon;
use App\ct_hoadon;
use App\xe;
use Mail;
use QrCode;

class DatVeController extends Controller
{
    public function getTT()
    {
        $tuyen = tuyen::all();
        $ben = ben::all();
        $lichchay = lichchay::all();
        $chitietghe = chitietghe::all();
        $chitietve = chitietve::all();
        $sodoghe = sodoghe::all();
        $khachhang = khachhang::all();
        $ve = ve::all();
        $hinhthucthanhtoan = hinhthucthanhtoan::all();
        $data = array(
            'ben'=>$ben,
            'chitietghe'=>$chitietghe,
            'hinhthucthanhtoan'=>$hinhthucthanhtoan,
            'khachhang'=>$khachhang,
            'chitietve'=>$chitietve,
            've'=>$ve,
        );
        
        return view('page.layout.checkout',$data);
        
    }

    public function postTT(Request $request)
    {   
        $this->validate($request,
            [
                'NgayKhoiHanh'=>'required',
                
                'HoTen'=>'required',
                'SDT'=>'required',
                'Email'=>'required',
                'DiaChi'=>'required'
            ],
            [
                'SDT.required'=>'Bạn chưa nhập số điện thoại',               
                'Email.required'=>'Bạn chưa nhập email',
                'DiaChi.required'=>'Bạn chưa nhập địa chỉ',
                'NgayKhoiHanh.required'=>'Bạn chưa chọn ngày khởi hành',
                'idCV.required'=>'Bạn chưa chọn id CV',
                
                'HoTen.required'=>'Bạn chưa nhập tên nhân viên',
            ]);

        $lichchay = lichchay::all();
        $khachhang = khachhang::all();
        $tuyen     = tuyen::all();
        $chitietve = chitietve::all();
        $NgayDatVe = now();
        $idBenDi = $request->idBenDi;
        $idBenDen = $request->idBenDen; 
        $NgayKhoiHanh = $request->NgayKhoiHanh;
        $GioKhoiHanh = $request->GioKhoiHanh;
        $TenGhe = $request->TenGhe;
        $Soluong = $request->SoLuong;
        $HoTen = $request->HoTen;
        $SDT = $request->SDT;
        $Email = $request->Email;
        $DiaChi = $request->DiaChi;
        $TenHTTT = $request->TenHTTT;  
        $test_ghe = $request->test_ghe;
        
        foreach($tuyen as $keytuyen){
            $tuyen_di = $keytuyen->idBenDi;
            $tuyen_den = $keytuyen->idBenDen;
            $tuyen_id = $keytuyen->id;

            if($idBenDi == $tuyen_di && $idBenDen == $tuyen_den)
            {
                $id_tuyen = $tuyen_id;
            }
        }
        
        foreach($lichchay as $keyLC){
            $LC_id = $keyLC->id;
            $LC_tuyen = $keyLC->idTuyen;
            $LC_gia = $keyLC->Gia;
            $LC_xe = $keyLC->idXe;
            if($id_tuyen == $LC_tuyen){
                $idLC = $LC_id;
                $giaLC = $LC_gia;
                $id_Xe = $LC_xe;
            }
        }
        
        // check khach hang
        foreach($khachhang as $keyKH){
            $SDT_KH = $keyKH->SDT;
            $Email_KH = $keyKH->Email;
            $Diachi_KH = $keyKH->DiaChi;

            if($SDT == $SDT_KH)
            {
                $khachhang = new khachhang;
                $khachhang->HoTen = $HoTen;
                $khachhang->SDT = $SDT_KH;
                $khachhang->Email = $Email_KH;
                $khachhang->DiaChi = $Diachi_KH;
            }else{
                $khachhang = new khachhang;
                $khachhang->HoTen = $HoTen;
                $khachhang->SDT = $SDT;
                $khachhang->Email = $Email;
                $khachhang->DiaChi = $DiaChi;
            }
        }

        $khachhang->save();
        $id_KH = $khachhang->id;
        $TongTien = $giaLC * $Soluong;

        $hoadon = new hoadon;
        $hoadon->NgayDatVe = $NgayDatVe;
        $hoadon->TongTien = $TongTien;
        $hoadon->GhiChu = 'test';
        $hoadon->idKH = $id_KH;
        $hoadon->idHTTT = $TenHTTT;
        $hoadon->save();
        $id_HD = $hoadon->id;

        $ve = new ve;
    	$ve->NgayDatVe = $NgayDatVe;
		$ve->idKH = $id_KH;
		$ve->idLC = $idLC;
        $ve->idHD = $id_HD;
        $ve->NgayKhoiHanh = $NgayKhoiHanh;
        $ve->GioKhoiHanh = $GioKhoiHanh;
        $ve->TrangThai = '0';
        $ve->idXe = $id_Xe;
        $ve->save();
        $id_ve = $ve->id;

        $ct_hoadon = new ct_hoadon;
        $ct_hoadon->id_hoadon = $id_HD;      
        $ct_hoadon->idVe = $id_ve;
        $ct_hoadon->SoLuong = $Soluong;
        $ct_hoadon->save();
      
        for ($i=0; $i < $Soluong; $i++) { 
            $chitietve = new chitietve;
            $chitietve->idVe = $id_ve;
            $chitietve->idGhe = $TenGhe;
            $chitietve->Gia = $giaLC;
            $chitietve->SoLuong = $Soluong/$Soluong;
            $chitietve->MaBiMat =  $id_ve."$"."_".str_random(32).($request->MaBiMat);
            $chitietve->save();
        }
        
        Mail::send(['html'=>'page.layout.mailfb'],['name','Lợi Dương'],function($message){
            $message->to('loiduong0511@yahoo.com')->subject("Chúc mừng bạn đã đặt vé thành công");
            $message->from('loiduong0511@gmail.com','Hệ thống bán vé xe điện tử LD.');
        });
        //check ok
        return Redirect('/checkout')->with('thongbao','Đặt vé thành công');
    }

    public function bookticket(Request $request)
    {
        $lichchay       = lichchay::all();
        $khachhang      = khachhang::all();
        $tuyen          = tuyen::all();
        $xe             = xe::all();
        $NgayDatVe      = now();

        $DiaChi         = $request->diachi;       
        $Email          = $request->email;
        $TenGhe         = $request->ghedat;
        $HoTen          = $request->hoten;
        $idLC           = $request->idlichchay;
        $id_tuyen       = $request->idtuyen;
        $id_xe          = $request->idxe;
        $SDT_kh         = $request->sdt;
        $tongtien       = $request->tongtien;
        $tongtienUSD    = $request->tongtienUSD;
        $tuyen_xe       = $request->tuyen;
        $ngaydatve      = $request->ngaydi;
        $ngaydatve      = date("d-m-Y H:i:s", strtotime($ngaydatve));    

        foreach($lichchay as $keyLC){
            $LC_id = $keyLC->id;
            $LC_tuyen = $keyLC->idTuyen;
            $LC_gia = $keyLC->Gia;
            $LC_xe = $keyLC->idXe;
            
            if($id_tuyen == $LC_tuyen){
                $id_lc      = $LC_id;
                $gia_lc     = $LC_gia;
                $id_xelc    = $LC_xe;
                $id_tuyenlc = $LC_tuyen; 
            }
        }

        $sdt_array = array();
        
        // check khach hang
        foreach($khachhang as $keyKH){
            $SDT_KH = explode(',',$keyKH->SDT);
            $id_KH  = $keyKH->id;
            $sdt_array = array_merge($sdt_array,$SDT_KH);
        }

        if(in_array($SDT_kh, $sdt_array)){
            khachhang::where('SDT', $SDT_kh)->update(array('HoTen' => $HoTen, 'Email' => $Email, 'DiaChi' => $DiaChi));
            $id_KH = (khachhang::where('SDT', $SDT_kh)->first())->id;
        }else{
            $khachhang = new khachhang;
            $khachhang->HoTen = $HoTen;
            $khachhang->SDT = $SDT_kh;
            $khachhang->Email = $Email;
            $khachhang->DiaChi = $DiaChi;
            $khachhang->save();
            $id_KH = $khachhang->id;
        }
        
        // Check & Update Ghe
        foreach ($xe as $vl_xe) {
            $id_vl_xe       = $vl_xe->id;
            $xe_ghe         = explode(',', $vl_xe->GheDaDat);
            $TenGhe_array   = explode(',', $TenGhe);
            $xe_all         = explode(',', $vl_xe->TatCaGhe);

            if($id_xelc == $id_vl_xe){
                foreach ($TenGhe_array as $vl_ghe) {
                    if(in_array($vl_ghe, $xe_ghe)){
                        echo json_encode(['status'=>'fasle','message'=>'Chố '.$vl_ghe.' đã được đặt']);die();
                    }elseif(!in_array($vl_ghe, $xe_all)){
                        echo json_encode(['status'=>'fasle','message'=>'Chố '.$vl_ghe.' không tồn tại']);die();
                    }else{
                        $xe_ghe         = array_merge(array($vl_ghe),$xe_ghe);
                        $update_ghe     = implode(',', $xe_ghe);
                        Xe::where('id', $id_xelc)->update(array('GheDaDat' => $update_ghe));
                    }
                }
            }
        }
        
        $soluong = count($TenGhe_array);

        // Tao hoa don
        $hoadon = new hoadon;
        $hoadon->NgayDatVe = $NgayDatVe;    
        $hoadon->TongTien = $tongtien;
        $hoadon->GhiChu = 'Dat ve cho vui';
        $hoadon->idKH = $id_KH;
        $hoadon->SoLuong = $soluong;
        $hoadon->GheDaDat = $TenGhe;
        $hoadon->save();

        if(($hoadon->save()) !== true){
          echo json_encode(['status'=>'fasle','message'=>'Khong the tao hoa don']);die();  
        }
        
        $id_HD = $hoadon->id;

        // Tao ve
        $ve = new ve;
        $ve->NgayDatVe = $NgayDatVe;
        $ve->idKH = $id_KH;
        $ve->idLC = $idLC;
        $ve->idHD = $id_HD;
        $ve->NgayKhoiHanh = $ngaydatve;
        $ve->GioKhoiHanh = $NgayDatVe;
        $ve->TrangThai = '0';
        $ve->idXe = $id_xe;
        $ve->save();

        if(($ve->save()) !== true){
          echo json_encode(['status'=>'fasle','message'=>'Khong the tao ve']);die();  
        } 
    }
}