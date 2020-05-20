<?php

namespace App;
use App\User;
use Illuminate\Database\Eloquent\Model;


class nhanvien extends Model
{
    protected $fillable = [
        'id',
        'HoTen',
        'SDT',
        'Email',
        'DiaChi',
        'NgaySinh',
        'idCV',
        'idUsers',
        'GioiTinh',
        'TrangThai',
    ];
    protected $table = "nhanvien";
    public $timestamps = false;

    public function users()
    {
    	return $this->belongsTo('App\User','idUsers','id');
    }

     public function chucvu()
    {
    	return $this->belongsTo('App\chucvu','idCV','id');
    }
    
}
