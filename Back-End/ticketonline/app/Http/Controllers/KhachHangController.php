<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\khachhang;
use App\khachhang_login;

class KhachHangController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }
    
    public function getDanhSach()
    {
    	$khachhang = khachhang::orderBy('id','DESC')->get();
    	return view('admin.khachhang.danhsach', ['khachhang'=>$khachhang]);
    }

    public function getThem()
    {
    	return view('admin.khachhang.them');
    }

    public function postThem(Request $request)
    {
        $this->validate($request,
            [
                'HoTen'=>'required|min:3|max:100|unique:khachhang',
                'SDT'=>'required',
                'Email'=>'required',
                'DiaChi'=>'required',
                'NgaySinh'=>'required',
                'idCV'=>'required',
                'idUsers'=>'required',
            ],
            [
                'SDT.required'=>'Bạn chưa nhập sdt',
                'Email.required'=>'Bạn chưa nhập email',
                'DiaChi.required'=>'Bạn chưa nhập địa chỉ',
                'NgaySinh.required'=>'Bạn chưa nhập ngày sinh',
                'idCV.required'=>'Bạn chưa chọn id CV',
                'idUsers.required'=>'Bạn chưa chọn id Users',
                'HoTen.required'=>'Bạn chưa nhập tên nhân viên',
                'HoTen.min'=>'Tên nhân viên quá ngắn',
                'HoTen.max'=>'Tên nhân viên quá dài'
            ]);
        $khachhang = new khachhang;
        $khachhang->HoTen = $request->HoTen;
        $khachhang->SDT = $request->SDT;
        $khachhang->Email = $request->Email;
        $khachhang->DiaChi = $request->DiaChi;
        $khachhang->NgaySinh = $request->NgaySinh;
        $khachhang->idCV = $request->idCV;
        $khachhang->idUsers = $request->idUsers;
        $khachhang->save();
        return redirect('admin/khachhang/them')->with('thongbao','Thêm thành công');
    }

    public function getSua($id)
    {
        $khachhang = khachhang::find($id);
        return view('admin.khachhang.sua',['khachhang'=>$khachhang]);
    }

    public function postSua(Request $request,$id)
    {
        $khachhang = khachhang::find($id);
        $chucvu = chucvu::all();
        $users = User::all();
        $this->validate($request,
            [
                'HoTen'=>'required|min:3|max:100:khachhang',
                'SDT'=>'required',
                'Email'=>'required',
                'DiaChi'=>'required',
                'NgaySinh'=>'required',
                'idCV'=>'required',
                'idUsers'=>'required',
            ],
            [
                'SDT.required'=>'Bạn chưa nhập sdt',
                'Email.required'=>'Bạn chưa nhập email',
                'DiaChi.required'=>'Bạn chưa nhập địa chỉ',
                'NgaySinh.required'=>'Bạn chưa nhập ngày sinh',
                'idCV.required'=>'Bạn chưa chọn id CV',
                'idUsers.required'=>'Bạn chưa chọn id Users',
                'HoTen.min'=>'Tên nhân viên quá ngắn',
                'HoTen.max'=>'Tên nhân viên quá dài'
            ]);
        $khachhang->HoTen = $request->HoTen;
        $khachhang->SDT = $request->SDT;
        $khachhang->Email = $request->Email;
        $khachhang->DiaChi = $request->DiaChi;
        $khachhang->NgaySinh = $request->NgaySinh;
        $khachhang->idCV = $request->idCV;
        $khachhang->idUsers = $request->idUsers;
        $khachhang->save();
        return redirect('admin/khachhang/sua/'.$id)->with('thongbao','Sửa thành công');
    }

    public function getXoa($id)
    {
        $khachhang = khachhang::find($id);
        $khachhang->delete();
        return redirect('admin/khachhang/danhsach')->with('thongbao','Xóa thành công');
    }

    // Check login khách hàng
    public function check_kh(Request $request){
        
        if(isset($request->name)){
            // dd($request->all());
            $this->reg_kh($request);
        }else{
            $this->login_kh($request);    
        }   
    }

    // Đăng ký khách hàng
    private function reg_kh(Request $request){
        $rq_name = $request->name;
        $rq_email   = $request->email;
        $rq_phone   = $request->phone;
        $rq_diachi  = $request->diachi;
        $rq_pass    = encrypt($request->password);

        $all_kh = khachhang_login::all();
        
        if(($all_kh->first()) == null){
            dd('Hellooo');
            $kh = new khachhang_login;

            $kh->name       = $rq_name;
            $kh->email      = $rq_email;
            $kh->phone      = $rq_phone;
            $kh->diachi     = $rq_diachi;
            $kh->password   = $rq_pass;

            if($request->hasFile('urlHinh'))
            {       
                $file = $request->file('urlHinh');

                $name = $file->getClientOriginalName();
                $urlHinh = str_random(4)."_".$name;
                while(file_exists("upload/kh/".$urlHinh))
                {
                    $urlHinh = str_random(4)."_".$name;
                }
                $file->move("upload/kh",$urlHinh);
                $kh->urlHinh = $urlHinh;
            }
            else
            {
                $kh->urlHinh = "default.png";
            }
            $kh->save();
            if(($kh->save()) !== true){
                echo json_encode(['status'=>'false','message'=>'Có lỗi !']);die();    
            }
            echo json_encode(['status'=>'true']);die();
        }
        
        foreach ($all_kh as $vl_kh) {
            $phone_kh = $vl_kh->phone;
            $email_kh = $vl_kh->email;
        
            if(($phone_kh == $rq_phone) || ($email_kh == $rq_email)){
                echo json_encode(['status'=>'false','message'=>'Số điện thoại hoặc email đã tồn tại.']);die();
            }else{
                $kh = new khachhang_login;

                $kh->name       = $rq_name;
                $kh->email      = $rq_email;
                $kh->phone      = $rq_phone;
                $kh->diachi     = $rq_diachi;
                $kh->password   = $rq_pass;

                if($request->hasFile('urlHinh'))
                {       
                    $file = $request->file('urlHinh');

                    $name = $file->getClientOriginalName();
                    $urlHinh = str_random(4)."_".$name;
                    while(file_exists("upload/kh/".$urlHinh))
                    {
                        $urlHinh = str_random(4)."_".$name;
                    }
                    $file->move("upload/kh",$urlHinh);
                    $kh->urlHinh = $urlHinh;
                }
                else
                {
                    $kh->urlHinh = "default.png";
                }
                $kh->save();
                if(($kh->save()) !== true){
                    echo json_encode(['status'=>'false','message'=>'Có lỗi !']);die();    
                }
                echo json_encode(['status'=>'true']);die();
            }
        }
    }
    
    // Đăng nhập khách hàng
    private function login_kh(Request $request){        
        $rq_email   = $request->email;
        $rq_pass    = $request->password;

        $all_kh = khachhang_login::all();

        foreach ($all_kh as $vl_kh) {
            $email_kh = $vl_kh->email;
            $pass_kh  = decrypt($vl_kh->password);

            if(($rq_email == $email_kh) && ($rq_pass == $pass_kh)){
                echo json_encode(['status'=>'true']);die();  
            }else{
                echo json_encode(['status'=>'false','message'=>'Mật khẩu hoặc email không đúng !']);die();  
            }
        }
    }

}
